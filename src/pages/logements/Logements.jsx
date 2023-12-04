
//import React
import { useParams } from 'react-router-dom';
import React from 'react';
//import composent
import Carousel from '../../components/carousel/Carousel';
import ErrorPage from '../error/Error';
import User from '../../components/user/User';
import StarRating from '../../components/rating/Rating';
import Tags from '../../components/tag/tag';
import Collapse from '../../components/collapse/Collapse';
//import Data
import Data from '../../Data/locations.json';
//import Css
import './logement.scss';



export default function Logements() {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);

    if (logement === undefined) {
        return <ErrorPage />;
    }
    return (
        <section className='logement_page'>
            <Carousel slides={logement.pictures} />

            <div className='logementContainer'>
                <div className='logementContainer_gauche'>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <Tags className='Tags' tags={logement.tags} />
                </div>

                <div className='logementContainer_droit'>
                    <User className='user' name={logement.host.name} profilePicture={logement.host.picture} />
                    <StarRating className='StarRating' rating={logement.rating} />
                </div>
            </div>

            <div className='logementContainer_collapse'>
                <div>
                    <Collapse className='Équipements' title="Équipements" content={logement.equipments} />
                </div>
                <div>
                    <Collapse className='Description' title="Description" content={logement.description} />
                </div>
            </div>
        </section>
    );
}
