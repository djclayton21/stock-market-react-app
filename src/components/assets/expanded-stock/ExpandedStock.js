import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import WatchToggle from '../watchToggle/WatchToggle';

const ExpandedStock = (props) => {
    const { symbol, name, price, change: changeAmount, canWatch = false } = props;
    const changePercent = props.changePercent ? props.changePercent:`(${(changeAmount / price * 100).toFixed(2)}%)`
    const arrowSymbol = changeAmount > 0 ? '\u25b2' : '\u25bc'
    const priceColor = changeAmount > 0 ? 'increase' : 'decrease'
    return (
        <>
            {canWatch ? (
                <div className = 'expanded'>
                    <WatchToggle symbol= {symbol} />
                    <Link className= 'expanded-name' title= {name} to= {`/details/${symbol}`}>
                        <div>{name}</div>
                    </Link>
                    <div className="expanded-details">
                        <span className = 'expanded-symbol'>{symbol}</span>
                        <span className= 'expanded-price'>{`$${Number(price).toFixed(2)}`}</span>
                        <span className= {`expanded-change ${priceColor}`}>
                            <span>{`${arrowSymbol}$${Math.abs(changeAmount).toFixed(2)}`}</span>
                            <span>{changePercent}</span>
                        </span>
                    </div>
                </div>
            ):(
                <div className = 'expanded'>
                    <div className= 'expanded-name'>{name}</div>
                    <div className="expanded-details">
                        <span className = 'expanded-symbol'>{symbol}</span>
                        <span className= 'expanded-price'>{`$${Number(price).toFixed(2)}`}</span>
                        <span className= {`expanded-change ${priceColor}`}>
                            <span>{`${arrowSymbol} $${Math.abs(changeAmount).toFixed(2)} `}</span>
                            <span>{changePercent}</span>
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
 
export default ExpandedStock;