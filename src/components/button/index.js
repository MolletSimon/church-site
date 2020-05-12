import React from "react";
import "./index.scss";

const Button = ({label, active, setActive}) => {
    const handleClick = () => {
        setActive(true);
    }

    return(
        active ? (
                <a href={`#${label}`}>
                    <button className="button active" onClick={handleClick}>{label}</button>
                </a>
            ) : (
            <a href={`#${label}`}>
                <button className="button" onClick={handleClick}>{label}</button>
            </a>
            )

    )
}

export default Button
