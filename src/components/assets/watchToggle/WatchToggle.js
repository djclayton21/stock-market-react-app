import React from 'react';
import { withWatchList } from '../../../context/WatchListProvider';

const WatchToggle = (props) => {
    const { symbol } = props
    return (
        <input 
            className = "watch-toggle" 
            type="checkbox" 
            checked= {props.watchList.includes(symbol)}
            onClick= {() => props.handleWatchToggle(symbol)}
        />
    );
}
 
export default withWatchList(WatchToggle);