import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

function Login(props) {
    // console.log(props);

    // const history = useHistory();
    // manage state for form inputs
    const [formState, setFormState] = useState({
        username: "",
        password: "",

    })

    // server error

    // constrol submit option if error
    const [buttonDis, setButtonDis]  = useState(true);

    //  manage state for error
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    // send ?
    
    
    // fn()

    // inline validation; key:value;
    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(
                e.target.value
            )
            .then(valid => {
                // the input is passing
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch( err => {
                // the input is breaking formSchema
                setErrors({...errors, [e.target.name]: err.errors[0] });
            })
    };

    // onSubmit 
    const logSubmit = (e) => {
        e.preventDefault();

        Axios.post("https://reqres.in/api/users", formState)
        .then( (res) => {
            // console.log(res)
            setFormState({
                username: "",
                password: ""
            })
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    // onChange
    const inputChange = (e) => {
        e.persist();
        const newFormState = {
            ...formState,
            [e.target.name]: e.target.value
        };

        validateChange(e);
        setFormState(newFormState);

    }

    // schema

    const formSchema = yup.object().shape({
        username: yup.string().min(5).required(),
        password: yup.string().min(8).required()
    })

    // useEffect
    useEffect( () => {
        formSchema.isValid(formState).then( (valid) => {
            console.log("is my form valid?", valid);
            setButtonDis(!valid)
        });
    }, [formState]);


    // use history prop for button
    const history = useHistory();

    const routeToSignup = () => {
        history.push("./signup")
    }

    return (

        
       <div className="form-cont">
           <div className="wrong-form">
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
                onSubmit={logSubmit}
                className="login-form"
            >
            <label 
                htmlFor="username"
            >
                Username
                <input
                    id="username"
                    type="text"
                    name="username"
                    autoComplete="username"
                    onChange={inputChange}
                    value={formState.username}
                />
                {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
            </label>

            <label
                htmlFor="password"
            >
                <br/>Password
                <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={inputChange}
                    value={formState.password}
                />
                {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            </label>
            <br/>
            <button
                type="submit"
                className="form-buttons"
                disabled={buttonDis}
            >
                Log-In
            </button>

            </form>
        </div>
    );
};

export default Login;

