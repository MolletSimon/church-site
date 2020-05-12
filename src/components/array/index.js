import React from "react";
import './index.scss';
import ArrayItem from "../arrayItem";

const Array = () => {
    const textHomeGroup = "C'est un rendez-vous incontournable pour tisser des liens et grandir ensemble dans sa foi en Jésus.";
    const textAglow = "Ce groupe de femmes permet des discussions intéressantes autour de la Bible, des témoignages partagés et des moments de prières.";
    const textMeetPrayer = "Chaque vendredi soir, nous nous retrouvons pour prier les uns pour les autres, pour des sujets concernant l'église et d'actualités.";
    const textYouthGroup = "Les jeunes se réunissent pour découvrir Jésus, partager leur réalité en tant que chrétien et approfondir leur connaissance sur Dieu.";
    const textBibleStudy = "Le mardi soir est l'occasion de découvrir plus encore Dieu et sa volonté pour nous au travers de la Bible.";
    const textTeen = "Le dimanche matin, les ados se retrouvent pour découvrir Dieu et discuter de la vie chrétienne.";

    return(
        <div className="background-array">
            <div className="array">
                <ArrayItem div="home-group" icon={require('../../images/home.png')} title="Groupe de maison" text={textHomeGroup}/>
                <ArrayItem div="aglow" title="Aglow église" text={textAglow}/>
                <ArrayItem div="pray-meet" icon={require('../../images/pray-hands.png')} title="Réunion de prières" text={textMeetPrayer}/>
                <ArrayItem div="youth"  title="Groupe de jeunesse" text={textYouthGroup}/>
                <ArrayItem div="bible-study" icon={require('../../images/bible.png')} title="Etudes Bibliques" text={textBibleStudy}/>
                <ArrayItem div="teen-group" title="Groupe d'ados" text={textTeen}/>
            </div>
        </div>
    )
}

export default Array;
