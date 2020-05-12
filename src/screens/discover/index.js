import React from "react";
import './index.scss'
import Title from "../../components/title";

const Discover = () => {
    return(
        <div className="discover">
            <Title title="Nous découvrir" />
            <div className="parallax">
                <div className="background-array">
                    <div className="array">
                        <div className="home-group"></div>
                        <div className="aglow"></div>
                        <div className="pray-meet"></div>
                        <div className="youth"></div>
                        <div className="bible-study"></div>
                        <div className="teen-group"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;
