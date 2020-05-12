import React from "react";
import './index.scss';

const Title = ({title, padding}) => {
    return(
        <div className="title" style={{padding: padding}}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title;
