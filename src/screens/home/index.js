import React from "react";
import './index.scss';

const Home = () => {
    return(
        <div className="img-welcome" data-aos="fade-right">
            <img src={require('../../images/Welcome.png')} alt="background"/>
        </div>
    )
}

export default Home;
