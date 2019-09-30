import React from 'react'
import './style.css'

const SimpleStock = (props) => {
    const {name, ticker, price} = props
    return (
        <div className= 'simple'>
            <span>{ticker}</span>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    );
}
 
export default SimpleStock;