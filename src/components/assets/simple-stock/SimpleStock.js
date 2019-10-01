import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const SimpleStock = (props) => {
    const {name, symbol, price} = props
    return (
        <Link to= {`/details/${symbol}`} >
            <div className= 'simple'>
                <span>{symbol}</span>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </Link>
    );
}
 
export default SimpleStock;