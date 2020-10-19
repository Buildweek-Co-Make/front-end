// import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

function Login(props) {


    const history = useHistory();

    const routeToSignup = () => {
        history.push("./signup")
    }

    return (

        
       <div className="form-cont">
           <div className="wrongform?">
               <p>
                   New to Co-Make?
               </p>
               <button 
                className="wrongButton"
                onClick={routeToSignup}>
                    Sign Up
               </button>
           </div>
            <form 
                // onSubmit={logSubmit}
                className="login-form"
            >
            <label 
                htmlFor="userName"
            >
                Username
                <input
                    id="username"
                    type="text"
                    name="username"
                />
            </label>

            <label
                htmlFor="password"
            >
                <br/>Password
                <input
                    id="password"
                    type="password"
                    name="password"
                />
            </label>
            <br/>
            <button
                type="submit"
                className="form-buttons"
            >
                Log-In
            </button>

            </form>
        </div>
    );
};

export default Login;

