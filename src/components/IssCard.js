import React from "react";

const IssCard = ({ props }) => {

    return (
        <div className="iss-card" key={props.created}>
            <div className="card-header">
                <p>
                    {props.title}
                </p>
            </div>
            <div className="card-cntnt">
    <h3>Location:</h3><p>{props.city}</p><p>{props.state}</p><p>{props.zipcode}</p>
    <h3>Description:</h3><p>{props.description}</p>
            </div>
        </div>
    );

}

export default IssCard;