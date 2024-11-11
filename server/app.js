require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const expressOasGenerator = require('express-oas-generator');
const request = require('supertest');
const { Pool, Client  } = require('pg');
const { parse } = require('pg-connection-string');

process.env.NODE_ENV = 'development';

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false,
};

const client = new Pool(config);

// Connect to the database
client.connect((err) => {
  if (err) {
    console.log(config);
    console.error('🔔🔔🔔 Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});  
// Make the database client available in all routes

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, _, next) => {
  req.db = client;
  next();
});
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.get("/", (_, res) => res.send("Hello World"));

// Define the route for creating a new user
app.post("/user", async (req, res) => {
  try {
    // Extract the user data from the request body
    const { id, name, email } = req.body;

    // Create a new user in the database
    const result = await req.db.query(
      'INSERT INTO users (id, name, email) VALUES ($1, $2, $3) RETURNING *',
      [id, name, email]
    );

    // Return the newly created user
    res.json(result.rows[0]);
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Define the route for getting a user by ID
app.get("/user/:id", async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const id = req.params.id;

    // Retrieve the user from the database
    const result = await req.db.query('SELECT * FROM users WHERE id = $1', [id]);

    // Return the user if found, otherwise return a 404 error
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error retrieving user' });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const id = req.params.id;

    // Delete the user from the database
    const result = await req.db.query('DELETE FROM users WHERE id = $1', [id]);

    // Return a success message if the user was deleted
    if (result.rowCount > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});


app.get("/ideas", async (req, res) => {
  try {
    // Retrieve all ideas from the database
    const result = await req.db.query('SELECT * FROM ideas ORDER BY likes DESC LIMIT 100 OFFSET 0');

    // Return the ideas
    res.json(result.rows);
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error retrieving ideas' });
  }
})

app.patch("/idea/like/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await req.db.query('UPDATE ideas SET likes = likes + 1 WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating idea' });
  }
})

app.patch("/idea/dislike/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await req.db.query('UPDATE ideas SET likes = likes - 1 WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating idea' });
  }
})

app.post("/idea", async (req, res) => {
  try {
    // Extract the idea data from the request body
    const { title, description, tags, user_id } = req.body;

    const values = tags.map((tag, index) => [tag, 1]);
    const placeholders = tags.map((tag, i) => `($${2*i + 1}, $${2*i + 2})`).join(', ');
    // console.log(values.flat());
    // console.log(placeholders);
    const tags_ids = await req.db.query( 
      `INSERT INTO tags (name, count) VALUES ${placeholders} ON CONFLICT (name) DO UPDATE SET count = tags.count + 1 RETURNING *`,
      values.flat()
    );

    // Create a new idea in the database
    const result = await req.db.query(
      'INSERT INTO ideas (title, description, tags, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, tags_ids.rows.map(row => row.id), user_id]
    );

    // Return the newly created idea
    res.json(result.rows[0]);
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error creating idea' });
  }
});

app.get("/idea/:id", async (req, res) => {
  try {
    // Extract the idea ID from the request parameters
    const id = req.params.id;

    // Retrieve the idea from the database
    const result = await req.db.query('SELECT * FROM ideas WHERE id = $1', [id]);

    // Return the idea if found, otherwise return a 404 error
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error retrieving idea' });
  }
}); 

app.patch("/idea/:id", async (req, res) => {
  try {
    // Extract the idea ID from the request parameters
    const id = req.params.id;

    // Extract the updated idea data from the request body
    const { title, description, tags } = req.body;

    const values = tags.map((tag, index) => [tag, 1]);
    const placeholders = tags.map((tag, i) => `($${2*i + 1}, $${2*i + 2})`).join(', ');
    // console.log(values.flat());
    // console.log(placeholders);
    const tags_ids = await req.db.query( 
      `INSERT INTO tags (name, count) VALUES ${placeholders} ON CONFLICT (name) DO UPDATE SET count = tags.count RETURNING *`,
      values.flat()
    );

    // Update the idea in the database
    const result = await req.db.query(
      'UPDATE ideas SET title = $1, description = $2, tags = $3 WHERE id = $4 RETURNING *',
      [title, description, tags_ids.rows.map(row => row.id), id]
    );

    // Return the updated idea if found, otherwise return a 404 error
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error updating idea' });
  }
});

app.delete("/idea/:id", async (req, res) => {
  try {
    // Extract the idea ID from the request parameters
    const id = req.params.id;
    const tags = await req.db.query('SELECT tags FROM ideas WHERE id = $1', [id]);
    await req.db.query('UPDATE tags SET count = count - 1 WHERE id = ANY($1)', [tags.rows[0].tags]);

    // Delete the idea from the database
    const result = await req.db.query('DELETE FROM ideas WHERE id = $1', [id]);

    // Return a success message if the idea was deleted
    if (result.rowCount > 0) {
      res.json({ message: 'Idea deleted successfully' });
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);
    res.status(500).json({ message: 'Error deleting idea' });
  }
});


app.get("/tags", async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM tags ORDER BY count DESC LIMIT 20 OFFSET 0');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving tags' });
  }
})

app.get("/tags/:tag", async (req, res) => {
  try { 
    const result = await req.db.query('SELECT * FROM ideas WHERE $1 = ANY(tags) ORDER BY likes',
      [req.params.tag]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving ideas' });
  }
})

app.get("/notification", async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM messages WHERE read = false ORDER BY created_at DESC LIMIT 20 OFFSET 0');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving notifications' });
  }
})

app.get("/message/:id", async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM messages WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving message' });
  }
})

app.post("/message", async (req, res) => {
  try {
    const { message, sender_id, receiver_id } = req.body;
    const result = await req.db.query('INSERT INTO messages (text, read, sender_id, receiver_id) VALUES ($1, $2, $3, $4)', 
      [message, false, sender_id, receiver_id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating message' });
  }
})

app.patch("/message/:id", async (req, res) => {
  try {
    const result = await req.db.query('UPDATE messages SET read = true WHERE id = $1', [req.params.id]);
    res.json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating message' });
  }
})

app.use((req, res, next) => {
  next(createError(404));
}); 



// describe('User Endpoints', () => {
//   afterAll(() => {
//     // no need to close the server, Supertest will handle it
//   });

//   it('should create a new user', async () => {
//     const response = await request(app).post('/user').send({ id: '123', name: 'John', email: 'XlTjT@example.com' });
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });

//   it('should retrieve a user', async () => {
//     const response = await request(app).get('/user/123');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });

//   it('should delete a user', async () => {
//     const response = await request(app).delete('/user/123');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });
// });

// describe('Idea Endpoints', () => {
//   afterAll(() => {
//     // no need to close the server, Supertest will handle it
//   });

//   it('should retrieve all ideas', async () => {
//     const response = await request(app).get('/idea');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });

//   it('should create an idea', async () => {
//     const response = await request(app).post('/idea').send({ id: '123', title: 'Idea 1', description: 'Description 1' });
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });

//   it('should retrieve an idea', async () => {
//     const response = await request(app).get('/idea/123');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });

//   it('should delete an idea', async () => {
//     const response = await request(app).delete('/idea/123');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toContain('json');
//   });
// });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

