import React from "react";
import './index.scss';
import Divider from "../divider";

const Card = ({title, subtitle, content}) => {
    return (
        <div className="card">
            <div className="img">
                <img src={require('../../images/pray.png')} alt="pray"/>
            </div>
            <div className="text">
                <h1>{title}</h1>
                <Divider />
                <h3>{subtitle}</h3>
                <p>{content[0]}</p>
                <p>{content[1]}</p>
            </div>
        </div>
    )
}

export default Card;
