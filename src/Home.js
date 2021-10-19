import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div class = "home">
            <Link to="/Signup">SignUp Page</Link> <br/>
            <Link to="/Login">Login Page</Link>
        </div>
    ) 
}

export default Home;