import React from 'react';
import Card from '../cards/Card';
import { NavLink } from 'react-router-dom';
import Data from '../../data/locations.json';
import './cardsCatalogue.scss';


const CardCatalogue = () => {

    return (
        // Section principale pour afficher le catalogue de cartes
        <section className="cardsCatalogue_section">
            {/* Conteneur de cartes pour afficher chaque carte */}
            <div className="card_container">
                {/* Utilise la fonction map pour parcourir chaque élément du tableau de données */}
                {Data.map((logement) => (
                    // Utilise NavLink pour créer des liens de navigation dynamiques vers chaque logement
                    <NavLink key={logement.id} to={`/logement/${logement.id}`}>
                        {/* Utilise le composant Card pour afficher les détails du logement */}
                        <Card logement={logement} />
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default CardCatalogue;