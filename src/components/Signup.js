import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";


function Signup(props) {
    
    console.log(props);

    const history = useHistory();

    const routeToLogin = () => {
        history.push("./login")
    }
    // manage state for form inputs
    const [formState, setFormState] = useState({
         fname: "",
         lname: "",
         username: "",
         email: "",
         zipcode: "",
         city: "",
         state: "",
         terms: ""   
    })

    // control submit option if error
    const [buttonDis, setButtonDis] = useState(true);

    // manage state for errors
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        zipcode: "",
        city: "",
        state: "",
        terms: ""

    })

    // functions
    // inline validation (key:value)
    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(
                e.target.type === "checkbox" ? e.target.checked : e.target.value
            )
            .then( valid => {
                // the input is passing
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                // input breaks formSchema
                setErrors({...errors, [e.target.name]: err.errors[0] });
            })
    }

    // neep endpoints from backend here e.g. https://reqres.in/api/users
    // onSubmit function
    const signSubmit = (e) => {
        e.preventDefault();

        Axios.post("https://reqres.in/api/users", formState)
        .then( (res) => {
            console.log(res)
            setFormState({
                fname: "",
                lname: "",
                username: "",
                email: "",
                zipcode: "",
                city: "",
                state: "",
                terms: "",
            })
        })
    }


    // onChange function
    const inputChange = (e) => {
        e.persist();
        const newFormState = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormState);

        
    }

    // schema for yup form validation
    const formSchema = yup.object().shape({
        fname: yup.string().min(5).required("Please enter first name"),
        lname: yup.string().min(5).required("Please enter last name"),
        username: yup.string().min(5).required("Please enter a new username"),
        email: yup.string().email().required(),
        zipcode: yup.string().max(5).required(),
        city: yup.string().required(),
        state: yup.string().max(2).required(),
        terms: yup.boolean().oneOf([true])
    })

    // useEffect 
    useEffect( () => {
        formSchema.isValid(formState).then( (valid) => {
            console.log("is my form valid?", valid);
            setButtonDis(!valid)
        });
    }, [formState]); 


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
                onSubmit={signSubmit}
                className="signup-form">
                <label htmlFor="fname">
                    First Name:
                    <input
                        id="fname"
                        type="text"
                        name="fname"
                        onChange={inputChange}
                        value={formState.fname}
                        data-cy="fname"
                    />
                    {errors.fname.length > 0 ? <p className="error">{errors.fname}</p> : null}
                </label>

                <label htmlFor="lname">
                    Last Name:
                    <input
                        id="lname"
                        type="text"
                        name="lname"
                        onChange={inputChange}
                        value={formState.lname}
                        data-cy="lname"
                    />
                    {errors.lname.length > 0 ? <p className="error">{errors.lname}</p> : null}
                </label>

                <label htmlFor="username">
                    Username:
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={inputChange}
                        value={formState.username} 
                        data-cy="username"
                        />
                        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={inputChange}
                        value={formState.email}
                        data-cy="email"
                    />
                    {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                </label>

                <label htmlFor="zipcode">
                    Zipcode:
                    <input
                        id="zipcode"
                        type="type"
                        name="zipcode"
                        onChange={inputChange}
                        value={formState.zipcode}
                        data-cy="zipcode"
                    />
                    {errors.zipcode.length > 0 ? <p className="error">{errors.zipcode}</p> : null}
                </label>

                <label>
                    City:
                    <input 
                        id="city"
                        type="text"
                        name="city"
                        onChange={inputChange}
                        value={formState.city}
                        data-cy="city"

                        />
                        {errors.city.length > 0 ? <p className="error">{errors.city}</p> : null}
                </label>

                <label>
                    State:
                    <input 
                        id="state"
                        type="text"
                        name="state"
                        onChange={inputChange}
                        value={formState.state}
                        data-cy="state"

                        />
                        {errors.state.length > 0 ? <p className="error">{errors.state}</p> : null}
                </label>

                <label>
                    Terms & Conditions
                    <input
                        id="terms"
                        type="checkbox"
                        name="terms"
                        checked={formState.terms}
                        onChange={inputChange}
                        data-cy="terms" 
                        />
                        {errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
                </label>

                <button 
                    type="submit"
                    className="form-buttons"
                    disabled={buttonDis}>
                    Sign Up
                </button>

                {/* <label htmlFor="" */}

            </form>
        </div>
    )
}

export default Signup;