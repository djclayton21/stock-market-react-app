import React from 'react';
import SimpleStock from '../assets/simple-stock/SimpleStock.js'

const MarketOverview = (props) => {
    const { indexes } = props
    
    const mappedIndexes = indexes.map(index => (
        <SimpleStock 
            ticker={index.ticker} 
            name={index.indexName} 
            price={index.price} 
            change={index.changes}
            changePercent={(100 * (index.changes / (index.price - index.changes))).toFixed(2)}
            key={index.ticker} />))

    return ( 
        <section className = 'market-overview'>
            <div>Market Overview</div>
            {mappedIndexes}
        </section> 
    );
}
 
export default MarketOverview;