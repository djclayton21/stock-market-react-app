import React from 'react';

const RatingHeader = (props) => {
    const { symbol, rating: { score, rating, recommendation } } = props
    return ( 
        <div className="detail-rating">
            <span>{symbol}</span>
            <span>Score: {score}</span>
            <span>Rating: {rating}</span>
            <span>{recommendation}</span>
        </div>
     );
}
 
export default RatingHeader;