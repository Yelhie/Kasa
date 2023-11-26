import React from 'react';
import './logement.scss';
import Carousel from '../../components/carousel/Carousel';
import Data from '../../Data/locations.json';
import ErrorPage from '../error/Error';
import { useParams } from 'react-router-dom';
import User from '../../components/user/User';

export default function Logements() {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);

    if (logement === undefined) {
        return <ErrorPage />;
    }
    return (
        <section className='LogementPage'>
            <Carousel slides={logement.pictures} />
            <div className='Titles'>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
            </div>
            <div className='User'>
                <User name={logement.host.name} profilePicture={logement.host.picture} />
            </div>
        </section>
    );
}

