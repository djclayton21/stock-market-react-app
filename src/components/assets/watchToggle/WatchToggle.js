import React from 'react';
import './style.css'
import { withWatchList } from '../../../context/WatchListProvider';

const WatchToggle = (props) => {
    const { symbol } = props
    const isChecked = props.watchList.includes(symbol)
    return (
        <div className = 'watch-toggle'>
            <label htmlFor={`checkbox-${symbol}`}className={`watch-myCheckbox ${isChecked && 'checked'}`}>$
                <input 
                    type="checkbox"
                    id={`checkbox-${symbol}`}
                    className="watch-checkbox"
                    checked= {isChecked}
                    onChange= {() => props.handleWatchToggle(symbol)}/>
            </label>
        </div>

    );
}
 
export default withWatchList(WatchToggle);