import React from 'react';

const StockProfile = (props) => {
    const { 
        profile: {
            companyName: name,
            website,
            price,
            changesPercentage: change,
            image: imgUrl,
            description,
            ceo,
            industry,
            exchange,
            mktCap: marketCap,
            volAvg: volume
        }
    } = props
    return (
        <div className="detail-profile">
            <div className="profile-basic">
                <div >
                    <div>{name}</div>
                    <div>${price} {change}</div>
                    <a href= {website} target="_blank">{website}</a>
                </div>
                <img src={imgUrl}  alt={name}/>
            </div>
            <div className="profile-description">
                <div>{description}</div>
                <div>CEO: {ceo}</div>
            </div>
            <div className="profile-details">
                <div>Industry: {industry}</div>
                <div>Exchange: {exchange}</div>
                <div>Market Cap: ${marketCap}</div>
                <div>Average Volume: {volume}</div>
            </div>
        </div>
    );
}
 
export default StockProfile;