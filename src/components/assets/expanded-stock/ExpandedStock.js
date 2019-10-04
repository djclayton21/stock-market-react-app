import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import WatchToggle from '../watchToggle/WatchToggle';

const ExpandedStock = (props) => {
    const { symbol, name, price, change: changeAmount, canWatch = false } = props;
    const changePercent = props.changePercent ? props.changePercent:`(${(changeAmount / price * 100).toFixed(2)}%)`
    return (
        <>
            {canWatch ? (
                <div className = 'expanded-link'>
                    <Link to= {`/details/${symbol}`}>
                        <div>{name}</div>
                    </Link>
                    <WatchToggle symbol= {symbol} />
                    <span>{symbol}</span>
                    <span>{price}</span>
                    <span>{changeAmount}</span>
                    <span>{changePercent}</span>
                </div>
            ):(
                <div className = 'expanded-nolink'>
                    <div>{name}</div>
                    <span>{symbol}</span>
                    <span>{price}</span>
                    <span>{changeAmount}</span>
                    <span>{changePercent}</span>
                </div>
            )}
        </>
    );
}
 
export default ExpandedStock;