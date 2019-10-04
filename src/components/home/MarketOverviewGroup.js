import React from 'react';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock.js'

const MarketOverviewGroup = (props) => {
    const { indexes } = props
    const mappedIndexes = indexes.map(index => (
        index.ticker &&
        <ExpandedStock
            symbol={index.ticker} 
            name={index.indexName} 
            price={index.price} 
            change={index.changes}
            key={`overview-${index.ticker}`} 
        />
    ))

    return ( 
        <div className = 'market-overview'>
            {mappedIndexes}
        </div> 
    );
}
 
export default MarketOverviewGroup;