import React from 'react'
import { NavLink } from 'react-router-dom'
import chroma from "chroma-js";

const LandingPage = () => {
    return (
        <div>
            <div><NavLink to={'/signin'}>Please Login</NavLink></div>
            <div style={{ backgroundColor: chroma("royalblue").hex() }} >Jtori</div>
        </div>
    )
}

export default LandingPage