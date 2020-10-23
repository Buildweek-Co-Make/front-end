import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from 'react-router-dom';
import IssCard from './IssCard';
import { issData } from '../data/sampleData';
import axios from "axios";

function Dashboard() {

    // history for route to IssCreatr
    const history = useHistory();

    const routeToCreatr = () => {
        history.push("./comake")
    }

    // manage state for dashboard page
    const [issues, setIssues] = useState([]);

    useState( () => {

        // axios
        //     .get("??")
        //     .then( res => {
        //         setIssues(issArr);
        //     })
        //     .catch( (err) => {
        //         console.log(err)
        //     })

        setIssues(issData);
    })

    return (
        <div className="dash-cont">
            <div className="dash-header">
                <p>
                    Help us Co-Make
                </p>
            </div>
            {issues.map(item => {
                return <IssCard props={item} />
            },0)}

            <button className="to-creatr-button"
                onClick={routeToCreatr}
            >
                Add Co-Maker Card

            </button>

            
            
        </div>
    )
}

export default Dashboard;