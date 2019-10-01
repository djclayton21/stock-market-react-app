import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

const ExpandedStock = (props) => {
    const {name, price, change: changeAmount} = props
    const changePercent = props.changePercent ? props.changePercent:`(${(changeAmount / price * 100).toFixed(2)}%)`
    return (
        <div className= 'expanded'>
            <span>{name}</span>
            <span>{price}</span>
            <span>{changeAmount}</span>
            <span>{changePercent}</span>
        </div>
    );
}
 
export default ExpandedStock;