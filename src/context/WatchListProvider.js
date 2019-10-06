import React, { Component } from 'react';
import axios from 'axios'
const WatchListContext = React.createContext()

class WatchListProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchList:[],
            watchListData:[],
            haveWatchListData: false
        }
    }
    handleWatchToggle = (stockSymbol) => {
        const isWatched = this.state.watchList.includes(stockSymbol);
        isWatched ? this.removeStockFromWatchList(stockSymbol) : this.addStockToWatchList(stockSymbol);
    }
    addStockToWatchList = (stockSymbol) => {
        axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`)
            .then(response => {
                this.setState(prevState => ({
                    watchList: [...prevState.watchList, stockSymbol],
                    watchListData: [...prevState.watchListData, response.data]
                }))
            })
            .catch(error => console.log(error))
        
    }
    removeStockFromWatchList = (stockSymbol) => {
        const updatedWatchList = this.state.watchList.filter(entry => entry !== stockSymbol)
        const updatedWatchListData = this.state.watchListData.filter(entry => entry.symbol !== stockSymbol)
        this.setState({
            watchList: [...updatedWatchList],
            watchListData: [...updatedWatchListData]
        })
    }
    getWatchListFromLocal = () => {
        const JSONList = localStorage.getItem('watchList')
        const list = JSON.parse(JSONList)
        if (list){
            this.setState({watchList: list})
        } else {
            localStorage.setItem('watchList', "[]")
        }
    }
    getWatchListData = () => {
        const watchListDataHolder = this.state.watchList.map(stockSymbol => {
            return axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`)
                .then(response => response.data)
                .catch(error => error)
        })

        Promise.all(watchListDataHolder)
            .then(responses => {
                this.setState({
                    watchListData: responses,
                    haveWatchListData: !!responses.length
                })
            })
            .catch(error => console.log(error))
    }
    clearLocalandState = () => {
        localStorage.clear()
        this.setState({watchList:[], watchListData:[]})
        console.log('deleted local')
    }
    saveWatchListToLocal = () => {
        const JSONList = JSON.stringify(this.state.watchList)
        localStorage.setItem('watchList', JSONList)
    }
    render() { 
        return (
            <WatchListContext.Provider
                value= {{
                    watchList: this.state.watchList,
                    watchListData: this.state.watchListData,
                    addStockToWatchList: this.addStockToWatchList,
                    getWatchListFromLocal: this.getWatchListFromLocal,
                    getWatchListData: this.getWatchListData,
                    saveWatchListToLocal: this.saveWatchListToLocal,
                    clearLocalandState: this.clearLocalandState,
                    removeStockFromWatchList: this.removeStockFromWatchList,
                    handleWatchToggle: this.handleWatchToggle,
                    haveWatchListData: this.state.haveWatchListData
                }}
            >
                {this.props.children}
            </WatchListContext.Provider>
        );
    }
}
export const withWatchList = C => props => (
    <WatchListContext.Consumer>
        {value => <C {...value} {...props} />}
    </WatchListContext.Consumer>
)
export default WatchListProvider;