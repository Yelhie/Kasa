import ArrowForward from '../../assets/arrow_forward.png'
import ArrowBack from '../../assets/arrow_back.png'
import { useState } from 'react';
import './carousel.scss';

const Carousel = ({ slides }) => {
    // Récupération de la longueur du tableau d'images
    const slidesLength = slides.length;
    // Création d'une variable d'état 'currentSlide' initialisée à 0
    // On utilise la fonction setPlace de React pour mettre à jour la valeur de currentSlide
    const [currentSlide, setPlace] = useState(0);

    // Fonction pour reculer à la diapositive précédente.
    const slideBack = function () {
        setPlace(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
    };

    // Fonction pour avancer à la diapositive suivante.
    const slideForward = function () {
        setPlace(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div id="carousel_container">
            {slidesLength > 1 && (
                <>
                    <img className="arrow_Back" src={ArrowBack} alt="Fléche navigation, image précédente" onClick={slideBack} disabled={slidesLength <= 1} />
                    <img className="arrow_Forward" src={ArrowForward} alt="Fléche navigation, image suivante" onClick={slideForward} disabled={slidesLength <= 1} />
                    <img className="carousel_Slide" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                    <div className="slide_Counter"> {currentSlide + 1}/{slidesLength}
                    </div>
                </>
            )}{/* Si une seule image est disponible, affiche seulement cette image */}
            {slidesLength === 1 && (
                <img
                    className="carousel_Slide" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`}
                />
            )}
        </div >
    );
};

export default Carousel;