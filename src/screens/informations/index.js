import React from 'react';
import './index.scss';
import Title from "../../components/title";

const Informations = () => {
    return(
        <div className="infos">
            <Title title="Informations" margin="10px" />
            <div className="infos-array">
                <div className="array-item" id="tel">
                    <h2>Téléphone</h2>
                    <h2>Pst. Emmanuel Avril</h2>
                    <p>07 86 40 84 70</p>
                </div>
                <div className="array-item">
                    <h2>Email de l'église</h2>
                    <p>A venir</p>
                </div>
                <div className="array-item">
                    <h2>Adresse de l'église</h2>
                    <p>8, rue du Mont Gargan 76000 Rouen</p>
                </div>
            </div>
        </div>
    )
}

export default Informations;
