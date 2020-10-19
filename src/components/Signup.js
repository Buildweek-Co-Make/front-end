import React from "react";
import { useHistory } from "react-router-dom";

function Signup(props) {
    

    const history = useHistory();

    const routeToLogin = () => {
        history.push("./login")
    }
    // manage state for form inputs


    // control submit option if error


    // manage state for errors


    // functions
    // inline validation (key:value)


    // onSubmit function


    // onChange function


    // schema for yup form validation


    // useEffect  


    return (
        <div className="form-cont">
            <div className="wrongform?">
                <p>
                   Already A Co-Maker?
               </p>
               <button 
                className="wrongButton"
                onClick={routeToLogin}>
                    Log In
               </button>
            </div>
            <form 
                // onSubmit={signSubmit}
                className="signup-form">
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                </label>

                <label htmlFor="zipcode">
                    Zipcode:
                    <input
                        id="zipcode"
                        type="number"
                        name="email"
                    />
                </label>

                {/* <label htmlFor="" */}

            </form>
        </div>
    )
}

export default Signup;