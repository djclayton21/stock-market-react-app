import React from 'react';
import SimpleStock from '../assets/simple-stock/SimpleStock.js'

const MarketOverview = (props) => {
    const { indexes } = props
    const mappedIndexes = indexes.map(index => (
        //change to more info component
        <SimpleStock 
            symbol={index.ticker} 
            name={index.indexName} 
            price={index.price} 
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