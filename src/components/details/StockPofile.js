import React from 'react';
import WatchToggle from '../assets/watchToggle/WatchToggle';

const StockProfile = (props) => {
    const { 
        symbol,
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
        <section className="detail-profile">Profile
            <div className="profile-basic">
                <div className='basic-text'>
                    <WatchToggle symbol={symbol} />
                    <div className= 'basic-name'>{name}</div>
                    <div className= 'basic-price'>Price: <span>${price} {change}</span></div>
                </div>
                <a className = 'basic-website'href= {website} target="_blank" rel="noopener noreferrer">Company Website <i class="fas fa-link"></i></a>
                <img className = 'basic-img'src={imgUrl}  alt={name}/>
            </div>
            <div className="profile-description">
                <div>{description}</div>
            </div>
            <div className="profile-details">
                <div>Industry: {industry}</div>
                <div>Exchange: {exchange}</div>
                <div>Market Cap: ${nFormatter(marketCap, 2)}</div>
                <div>Average Volume: {nFormatter(volume, 2)} shares</div>
            </div>
        </section>
    );
}

function nFormatter(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: " Mn" },
        { value: 1E9, symbol: " Bn" },
        { value: 1E12, symbol: "Tr" },
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
export default StockProfile;