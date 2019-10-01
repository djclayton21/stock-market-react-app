import React from 'react';
import SimpleStock from '../assets/simple-stock/SimpleStock.js'

const StockGroup = (props) => {
    const { stocks } = props
    const mappedStocks = stocks.map(stock => (
        <SimpleStock 
            symbol={stock.ticker} 
            name={stock.companyName} 
            price={stock.price} 
            key={`${props.title}-${stock.ticker}`} />))

    return ( 
        <section className = 'stock-group'>
            <div>{props.title}</div>
            {mappedStocks}
        </section> 
    );
}
 
export default StockGroup;