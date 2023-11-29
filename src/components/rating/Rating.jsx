import React from 'react';
import emptyStar from '../../assets/EmptyStar.png';
import filledStar from '../../assets/FilledStar.png';

const StarRating = ({ rating }) => {
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <img
                key={index}
                src={index < rating ? filledStar : emptyStar}
                alt={index < rating ? 'filled star' : 'empty star'}
                className="star-image"
            />
        ));
    };

    return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;


