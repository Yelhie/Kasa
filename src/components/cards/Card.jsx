import React from 'react';
import './card.scss';

const Card = (props) => {

    return (
        // Conteneur principal de la carte
        <div className='Card'>
            {/* Récupére le titre du logement */}
            <p>{props.logement.title}</p>
            {/* récupére l'image de couverture du logement */}
            <img src={props.logement.cover} alt={props.logement.title} />
        </div>
    );
};

export default Card;