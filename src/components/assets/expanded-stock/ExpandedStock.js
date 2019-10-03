import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
import { withWatchList } from '../../../context/WatchListProvider'

const ExpandedStock = (props) => {
    const { symbol, name, price, change: changeAmount, canWatch = false, watchList } = props;
    let isWatched = false;
    isWatched = watchList.includes(symbol) 
    const changePercent = props.changePercent ? props.changePercent:`(${(changeAmount / price * 100).toFixed(2)}%)`
    return (
        <div className= 'expanded'>
            {canWatch && !isWatched && <button onClick= {() => props.addStockToWatchList(symbol)}>Watch</button>}
            {canWatch && isWatched && <button onClick = {() => props.removeStockFromWatchList(symbol)}>UnWatch</button>}
            <span>{name}</span>
            <span>{price}</span>
            <span>{changeAmount}</span>
            <span>{changePercent}</span>
        </div>
    );
}
 
export default withWatchList(ExpandedStock);