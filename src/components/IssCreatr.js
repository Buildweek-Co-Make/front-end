import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as yup from "yup";
import { issData } from '../data/sampleData';



function Creatr() {

    // manage state for form inputs
    const [formState, setFormState] = useState({
        title: "",
        city: "",
        state: "",
        zipcode: "",
        description: ""
    })

    // server error

    // control submit option for validtn error
    const [buttonDis, setButtonDis] = useState(true);

    // manage state for error
    const [errors, setErrors] = useState({
        title: "",
        city: "",
        state: "",
        zipcode: "",
        description: ""

    })

    // add new data to list
    
    // functions

    // inline validaton e.g. key:value;

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
            .catch(err => {
                // input breaks formSchema
                setErrors({...errors, [e.target.name]: err.errors[0] });
            })
    };

    // onSubmit function
    const formSubmit = (e) => {
        e.preventDefault();

        // Axios.post("#", formState)
        // .then( (res) => {
        //     console.log(res)
        //     setPost(res.data)
        //     setFormState({
        //         title: "",
        //         city: "",
        //         state: "",
        //         zipcode: "",
        //         description: ""
        //     })
        // })

        issData.push(formState);
        setFormState({
            title: "",
            city: "",
            state: "",
            zipcode: "",
            description: ""
        })

    };

    // onChange

    const inputChange = (e) => {
        e.persist();
        const newFormState = {
            ...formState,
            [e.target.name]: e.target.value
        };

        validateChange(e);
        setFormState(newFormState);
    };

    // schema

    const formSchema = yup.object().shape({
        title: yup.string().min(10).required(),
        city: yup.string().required(),
        state: yup.string().max(2).required(),
        zipcode: yup.string().required().matches(/^[0-9]+$/, "must be only digits").min(5).max(5),
        description: yup.string().required()
    });

    // button change effect hook
    useEffect( () => {
        formSchema.isValid(formState).then( (valid) => {
            console.log("is the newIssue valid?", valid);
            setButtonDis(!valid)
        });
    }, [formState]);

    console.log("formState", formState);

    return (
        <div className="form-cont">
            <form
                onSubmit={formSubmit}
                className="iss-form">
                <label htmlFor="title">
                    Title
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        value={formState.title}
                        onChange={inputChange}
                        data-cy="title"
                    />
                    {errors.title.length > 0 ? <p className="error">{errors.title}</p> : null}
                </label>

                <label htmlFor="city">
                    City
                    <input 
                        id="city"
                        type="text"
                        name="city"
                        value={formState.city}
                        onChange={inputChange}
                        data-cy="city"
                    />
                    {errors.city.length > 0 ? <p className="error">{errors.city}</p> : null}
                </label>

                <label htmlFor="state">
                    State
                    <input 
                        id="state"
                        type="text"
                        name="state"
                        value={formState.state}
                        onChange={inputChange}
                        data-cy="state"
                    />
                    {errors.state.length > 0 ? <p className="error">{errors.state}</p> : null}
                </label>

                <label htmlFor="zipcode">
                    Zipcode
                    <input 
                        id="zipcode"
                        type="text"
                        name="zipcode"
                        value={formState.zipcode}
                        onChange={inputChange}
                        data-cy="zipcode"
                    />
                    {errors.zipcode.length > 0 ? <p className="error">{errors.zipcode}</p> : null}
                </label>

                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description"
                        type="text"
                        name="description"
                        value={formState.description}
                        onChange={inputChange}
                        data-cy="description"
                    />
                    {errors.description.length > 0 ? <p className="error">{errors.description}</p> : null}
                </label>

                <button 
                    type="submit"
                    className="add-button"
                    disabled={buttonDis}
                    data-cy="submit"
                    >
                    Add To Dashboard
                    
                </button>

            </form>
        </div>
    )

}

export default Creatr;