import React, { Component } from 'react';
import './style.css'
import { withWatchList } from '../../context/WatchListProvider';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock';

class WatchListPage extends Component {
    componentDidMount(){
        this.props.getWatchListData()
    }
    componentDidUpdate(prevProps){
        if(prevProps.watchList !== this.props.watchList){
            this.props.getWatchListData()
        }
    }
    render(){
        const { watchListData } = this.props
        const mappedwatchList = watchListData.map(watchedStock => (
            watchedStock.symbol &&
            <ExpandedStock
                canWatch='true'
                symbol={watchedStock.symbol} 
                name={watchedStock.profile.companyName} 
                price={watchedStock.profile.price} 
                change={watchedStock.profile.changes}
                changePercent={watchedStock.profile.changesPercentage}
                key={`watchlist-${watchedStock.symbol}`} 
            />
        ))
        return ( 
            <div className = 'watch-list-page'>
                {mappedwatchList}
            </div>
        );
    }
}
 
export default withWatchList(WatchListPage);