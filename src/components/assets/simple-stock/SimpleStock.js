import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import WatchToggle from '../watchToggle/WatchToggle'

const SimpleStock = (props) => {
    const {name, symbol, price} = props
    return (
        <div className= 'simple'>
            <WatchToggle symbol = {symbol}></WatchToggle>
            <Link to= {`/details/${symbol}`} title= {name} className= 'simple-details' >
                <span className = 'simple-symbol'>{`${symbol} -`}</span>
                <span className='simple-name'>{name}</span>
                <span className='simple-price'>{`$${price.toFixed(2)}`}</span>
            </Link>
        </div>
    );
}
 
export default SimpleStock;