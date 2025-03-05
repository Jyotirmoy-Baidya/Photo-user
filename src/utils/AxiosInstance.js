import axios from 'axios';

const baseUrl = "https://rmwcfxmixi.us-east-1.awsapprunner.com";

const axiosInstance = axios.create({
    baseURL: `${baseUrl}/`,
    timeout: 10000, // Timeout after 10 seconds
    // withCredentials: true, // Include cookies in requests by default
    headers: {
        'Content-Type': 'application/json',
    },
});

const axiosHandler = async (method, url, data = {}, config = {
    withCredentials: true,
}) => {
    try {
        const response = await axiosInstance({
            method: "get",  // Ensure 'method' is properly passed
            url: "user/1",        // Ensure 'url' is provided
            data: data,      // Optional: Only include if needed
            // withCredentials: true
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.log("ss" + error);
        console.error('Axios Error:', error.response ? error.response.data : error.message);
        // You can return a custom error object or message here
        return {
            success: false,
            message: error.response ? error.response.data.message : error.message,
        };
    }
};

export default axiosHandler;