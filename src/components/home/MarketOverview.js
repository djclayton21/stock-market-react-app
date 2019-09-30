import React from 'react';
import SimpleStock from '../assets/simple-stock/SimpleStock.js'

const MarketOverview = (props) => {
    const { indexes } = props
    
    const mappedIndexes = indexes.map(index => (
        <SimpleStock 
            ticker={index.ticker} 
            name={index.indexName} 
            price={index.price} 
            key={index.ticker} 
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