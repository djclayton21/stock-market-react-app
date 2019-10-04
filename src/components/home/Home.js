import React, {Component} from 'react';
import './style.css';
import StockGroup from './StockGroup.js';
import MarketOverviewGroup from './MarketOverviewGroup.js';
import { withStockData } from '../../context/StockDataProvider.js'
import { withWatchList }    from '../../context/WatchListProvider.js'
import WatchListGroup from './WatchListGroup';

class Home extends Component {
    componentDidMount(){
        this.props.getGroupData()
        this.props.getWatchListData()
    }
    componentDidUpdate(prevProps){
        if(prevProps.watchList !== this.props.watchList){
            this.props.getWatchListData()
        }
    }

    render(){    
        const {indexes, gainers, losers, watchListData} = this.props
        
        return ( 
            <div className="home">
                <MarketOverviewGroup indexes = {indexes}/>
                <WatchListGroup watchListData = {watchListData} />
                <StockGroup title="Biggest Gainers" stocks= {gainers} />
                <StockGroup title="Biggest Losers" stocks= {losers} />
            </div> 
        );
    }
}

export default withWatchList(withStockData(Home));