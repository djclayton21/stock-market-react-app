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
        <div className = 'stock-group'>
            {mappedStocks}
        </div> 
    );
}
 
export default StockGroup;