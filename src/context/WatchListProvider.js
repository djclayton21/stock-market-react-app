import React, { Component } from 'react';
import axios from 'axios'
const WatchListContext = React.createContext()

class WatchListProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchList:[],
            watchListData:[],
        }
    }
    addStockToWatchList = (stockSymbol) => {
        if (!this.state.watchList.includes(stockSymbol)){
            this.setState(prevState => (
                {watchList: [...prevState.watchList, stockSymbol]}
            ))
        }
        console.log(this.state.watchList)
    }
    removeStockFromWatchList = (stockSymbol) => {
        if(this.state.watchList.includes(stockSymbol)){
            const updated = this.state.watchList.filter(entry => entry !== stockSymbol)
            this.setState({watchList: [...updated]})
        }
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
        const watchListData = this.state.watchList.map(stockSymbol => {
            return axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`)
                .then(response => response.data)
                .catch(error => error)
        })

        Promise.all(watchListData)
            .then(responses => {
                this.setState({watchListData: responses})
            })
            .catch(error => console.log(error))
    }
    clearLocalandState = () => {
        localStorage.clear()
        this.setState({watchList:[], watchListData:[]})
        console.log('tried to delete')
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
                    removeStockFromWatchList: this.removeStockFromWatchList
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