import React from 'react';
import './style.css'

const StockDetails = (props) => {
    return ( 
        <div className="stock-details">
            Details: {props.match.params.ticker}
        </div>
     );
}
 
export default StockDetails;