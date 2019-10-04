import React from 'react';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock.js';

const StockGroup = (props) => {
    const { stocks } = props
    const mappedStocks = stocks.map(stock => (
        stock.ticker &&
        <ExpandedStock 
            canWatch='true'
            symbol={stock.ticker} 
            name={stock.companyName} 
            price={stock.price}
            change={stock.changes}
            changePercent={stocks.changesPercentage}
            key={`${props.title}-${stock.ticker}`} />))

    return ( 
        <section className = 'stock-group'>
            <div className = 'group-subtitle'>{props.title}</div>
            {mappedStocks}
        </section> 
    );
}
 
export default StockGroup;