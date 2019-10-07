import React from 'react';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock.js'

const WatchListGroup = (props) => {
    const { watchListData } = props
    const shortWatchList = watchListData.slice(0, 5)
    const mappedWatchList = shortWatchList.map(watchedStock => (
        watchedStock.symbol && (
        <ExpandedStock
            canWatch='true'
            symbol={watchedStock.symbol} 
            name={watchedStock.profile.companyName} 
            price={watchedStock.profile.price} 
            change={watchedStock.profile.changes}
            changePercent={watchedStock.profile.changesPercentage}
            key={`watchlist-${watchedStock.symbol}`} 
        />)
    ))

    return ( 
        <div className = 'watch-list-group'>
            {mappedWatchList}
        </div> 
    );
}
 
export default WatchListGroup;