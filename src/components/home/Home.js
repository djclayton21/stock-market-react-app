import React, { Component } from 'react'
import './style.css';
import { withStockData } from '../../context/StockDataProvider.js'
import { withWatchList }    from '../../context/WatchListProvider.js'
import Loading from '../assets/loading/Loading';
import StockGroup from './StockGroup.js';
import MarketOverviewGroup from './MarketOverviewGroup.js';
import WatchListGroup from './WatchListGroup.js'

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
        const {indexes, haveIndexes, gainers, haveGainers, losers, haveLosers, watchListData, watchList, haveWatchListData} = this.props
        
        return ( 
            <div className="home">
                <section className="list-container">Market Overview
                    {haveIndexes ? <MarketOverviewGroup indexes = {indexes}/> : <Loading />}
                </section>
                <section className="list-container">Watch List
                    {haveWatchListData || watchList.length === 0 ? <WatchListGroup watchListData = {watchListData} /> : <Loading />}
                </section>
                <section className="list-container">Biggest Gainers
                    {haveGainers ? <StockGroup stocks= {gainers} /> : <Loading />}
                </section>
                <section className="list-container">Biggest Losers
                    {haveLosers ? <StockGroup stocks= {losers} /> : <Loading />}
                </section>
            </div> 
        );
    }
}

export default withWatchList(withStockData(Home));