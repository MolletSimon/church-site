import React from "react";
import './index.scss';
import Card from "../../components/card";

const History = () => {
    const contentFirstPart = "En 1993, le pasteur Hans Peter Bolli et sa femme créent l'église après deux ans de travail pour l'implanter.​ L'église démarre dans les maisons et se rend vite compte de la nécessité d'élargir ses murs : elle déménage ainsi au cœur de Rouen, rue Achille Flaubert.\n" +
        "\n" +
        "L'église poursuit son évolution avec l'arrivée du pasteur François Filipiak en 2003 et un deuxième déménagement en 2009 dans le quartier du mont Gargan."

    const contentSecondPart = "Durant nos célébrations le dimanche, nous avons un service de musique dynamique dirigé pour l'adoration de Dieu.​ Les prédications reposent sur la Bible car nous croyons qu'elle renferme l'amour, la sagesse et la volonté de Dieu pour nous aujourd'hui.\n" +
        "\n" +
        "Notre église est marquée par son accueil et son souci de la communauté. Nous sommes sensibles aux besoins de la ville et du quartier. Notre partenaire l'Association pour la Famille, l'Enfance et la Jeunesse (AFEJ) agit pour le bien-être commun."
    return (
        <div className="history">
            <div className="div">
                blank
            </div>
            <Card title="Notre histoire" subtitle="Une église à Rouen" content={[contentFirstPart, contentSecondPart]}/>
        </div>
    );
}

export default History;
