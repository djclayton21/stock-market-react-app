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
        <section className = 'watch-list-group'>
            <div className = 'group-subtitle'>Watch List</div>
            {mappedWatchList}
            {mappedWatchList.length < 5 && (
                <div className= 'watch-list-help'>
                    Click the <span clasName = "dollaaaaa">$</span> to add a stock to your watch list!</div>
            )}
        </section> 
    );
}
 
export default WatchListGroup;