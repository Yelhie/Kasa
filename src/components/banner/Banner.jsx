import React from 'react';
import BannerAbout from '../../assets/banner_about.png';
import BannerHome from '../../assets/banner_home.png';
import './banner.scss';

//Déclare la constant Banner avec le paramétre page
const Banner = ({ page }) => {
    // Choisissez la bannière en fonction de la page
    const chooseBanner = () => {
        switch (page) {
            case 'about':
                return BannerAbout;
            case 'home':
                return BannerHome;
            // Si aucun lien vers une banniére affiche celle-ci par défaut
            default:
                return BannerHome;
        }
    };

    return (
        <div className='banner'>
            <img src={chooseBanner()} alt={`Bannière de la catégorie ${page}.`} />
        </div>
    );
};

export default Banner;
