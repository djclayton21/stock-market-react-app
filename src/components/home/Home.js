import React, {Component} from 'react';
import './style.css';
import StockGroup from './StockGroup.js';
import MarketOverview from './MarketOverview.js';
import { withStockData } from '../../context/StockDataProvider'

class Home extends Component {
    componentDidMount(){
        this.props.getGroupData()
    }
    render(){    
        const {indexes, gainers, losers} = this.props
        return ( 
            <div className="home">
                <MarketOverview indexes = {indexes}/>
                <StockGroup title="Yesterday's Gainers and Losers" stocks= {[...gainers, ...losers]} />
                <StockGroup title="Yesterday's Hottest" stocks= {losers} />
            </div> 
        );
    }
}

export default withStockData(Home);