import React from "react";
import './index.scss'
import Title from "../../components/title";
import Array from "../../components/array";

const Discover = () => {
    return(
        <div className="discover">
            <Title title="Nous découvrir" padding="100px" />
            <div className="parallax">
                <Array/>
            </div>
        </div>
    )
}

export default Discover;
