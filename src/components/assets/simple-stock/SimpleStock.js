import React from 'react'
import './style.css'

const SimpleStock = (props) => {
    const {name, ticker, price, change, changePercent} = props
    return (
        <div className= 'simple'>
            <span>{name}</span>
            <span>{ticker}</span>
            <span>{price}</span>
            <span>{change}</span>
            <span>{changePercent}</span>
        </div>
    );
}
 
export default SimpleStock;