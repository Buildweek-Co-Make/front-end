import React from "react";
import styled from "styled-components";

const CoMakerCard =styled.div`
display: flex;
flex-direction: column;
width:50%;
background-color: #1f1f1f;
opacity: .60;
border-radius: 5% 5% ;
border: 2px dashed orange;
color: orange;
margin-bottom: 3%;
padding: 2%;
font-weight: bold;
`;

const IssCard = ({ props }) => {

    return (
        <CoMakerCard className="iss-card" key={props.created}>
            <div className="card-header">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="card-cntnt">
    <h3>Location:<span>{props.city},{props.state}</span></h3><p>{props.zipcode}</p>
    <h3>Description:</h3><p>{props.description}</p>
            </div>
        </CoMakerCard>
    );

}

export default IssCard;