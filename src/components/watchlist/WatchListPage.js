import React, { Component } from 'react';
import './style.css'
import { withWatchList } from '../../context/WatchListProvider';
import ExpandedStock from '../assets/expanded-stock/ExpandedStock';
import Loading from '../assets/loading/Loading';

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
        const { watchListData, haveWatchListData, watchList } = this.props
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
            <main className = 'watch-list-page'>
                <div className="list-container">Watch List
                    {haveWatchListData || watchList.length === 0 ? mappedwatchList : <Loading />}
                    {watchList.length === 0 && <div className ='watch-list-help'>There are no files in your watch list Click the <span>$</span> to add a stock to your watch list!</div> }
                </div>
            </main>
        );
    }
}
 
export default withWatchList(WatchListPage);