import React from 'react';

const RatingHeader = (props) => {
    const { symbol, rating: { score, rating, recommendation } } = props
    const scoreDollas = '$'.repeat(score)
    return ( 
        <section className="detail-rating">
            <div className= 'rating-symbol'>{symbol}</div>
            <span className = 'rating-dollas'>{scoreDollas}</span>
            <span className="rating-grade">{rating}</span>
            <div>{recommendation}</div>
        </section>
     );
}
 
export default RatingHeader;