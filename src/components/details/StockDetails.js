import React from 'react';
import './style.css'

const StockDetails = (props) => {
    return ( 
        <div className="stock-details">
            Details: {props.match.params.symbol}
        </div>
     );
}
 
export default StockDetails;