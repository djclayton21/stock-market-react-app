import React from 'react';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock.js'

const WatchListGroup = (props) => {
    const { watchListData } = props
    const mappedwatchList = watchListData.map(watchedStock => (
        watchedStock.symbol &&
        <ExpandedStock
            canWatch='true'
            symbol={watchedStock.symbol} 
            name={watchedStock.profile.companyName} 
            price={watchedStock.profile.price} 
            change={watchedStock.profile.changes}
            changePercent={watchedStock.profile.changesPercentage}
            key={`watchlist-${watchedStock.symbol}`} 
        />
    ))

    return ( 
        <section className = 'market-overview'>
            <div>WatchList</div>
            {mappedwatchList}
        </section> 
    );
}
 
export default WatchListGroup;