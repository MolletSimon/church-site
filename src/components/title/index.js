import React from "react";
import './index.scss';

const Title = ({title, margin}) => {
    return(
        <div className="title" style={{marginTop: margin}}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title;
