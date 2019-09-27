import React from 'react';
import './style.css';
import StockGroup from './StockGroup.js';
import MarketOverview from './MarketOverview.js';
import { withStockData } from '../../context/StockDataProvider'

const Home = (props) => {
    return ( 
        <div className="home">
            <MarketOverview indexes = {props.indexes}/>
            <StockGroup title='Biggest Gainers and Losers' stocks= {[...props.gainers, ...props.losers]} />
            <StockGroup title='Most Popular' stocks= {props.losers} />
        </div> );
}
 
export default withStockData(Home);