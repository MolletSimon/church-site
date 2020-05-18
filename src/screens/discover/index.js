import React from "react";
import './index.scss'
import Title from "../../components/title";
import Array from "../../components/array";

const Discover = () => {
    return(
        <div className="discover">
            <div data-aos="fade-up"><Title title="Nous découvrir" margin="40px"/></div>
            <div className="parallax">
                <Array/>
            </div>
        </div>
    )
}

export default Discover;
