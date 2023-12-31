import React from 'react';
import emptyStar from '../../assets/EmptyStar.png';
import filledStar from '../../assets/FilledStar.png';
import './rating.scss';

const Rating = ({ rating }) => {
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <img className="star_image"
                key={index}
                src={index < rating ? filledStar : emptyStar}
                alt={index < rating ? 'filled star' : 'empty star'}
            />
        ));
    };

    return <div className="star_rating">{renderStars()}</div>;
};

export default Rating;


