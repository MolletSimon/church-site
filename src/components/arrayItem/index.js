import React from "react";
import './index.scss';

const ArrayItem = ({div, title, icon, text}) => {
    return (
        <div className={div}>
            {icon ? (
                <div className="item">
                    <div className="icon">
                        <img src={icon} alt="icon" />
                    </div>

                    <div className="text-array">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="text-array">
                        <h2>{title}</h2>
                        <p>{text}l</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ArrayItem;
