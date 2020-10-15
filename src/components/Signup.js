import React from "react";
import { useHistory } from "react-router-dom";

function Signup() {



    return (
        <div className="form-cont">
            <form 
                onSubmit={formSubmit}
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