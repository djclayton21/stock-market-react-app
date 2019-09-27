import React from 'react';
import SimpleStock from '../assets/simple-stock/SimpleStock.js'

const StockGroup = (props) => {
    const { stocks } = props

    const mappedStocks = stocks.map(stock => (
        <SimpleStock 
            ticker={stock.ticker} 
            name={stock.companyName} 
            price={stock.price} 
            change={stock.changes}
            changePercent= {stock.changesPercentage}
            key={stock.ticker} />))

    return ( 
        <section className = 'stock-group'>
            <div>{props.title}</div>
            {mappedStocks}
        </section> 
    );
}
 
export default StockGroup;