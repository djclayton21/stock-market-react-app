import React from 'react';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock.js'

const MarketOverview = (props) => {
    const { indexes } = props
    const mappedIndexes = indexes.map(index => (
        //change to more info component
        <ExpandedStock 
            symbol={index.ticker} 
            name={index.indexName} 
            price={index.price} 
            change={index.changes}
            key={`overview-${index.ticker}`} 
        />
    ))

    return ( 
        <section className = 'market-overview'>
            <div>Market Overview</div>
            {mappedIndexes}
        </section> 
    );
}
 
export default MarketOverview;