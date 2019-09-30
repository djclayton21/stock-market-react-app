import React, { Component } from 'react';
import axios from 'axios'

const StockDataContext = React.createContext()

class StockDataProvider extends Component {
    constructor() {
        super();
        this.state = { 
            gainers: [],
            losers: [],
            indexes: [],
            searchList: []
        }
    }

    getGroupData = () => {
        //major idexes
        axios.get("https://financialmodelingprep.com/api/v3/majors-indexes")
            .then(res => {
                this.setState({
                    indexes: res.data.majorIndexesList.slice(0, 3)
                })
            })
            .catch(err =>console.log(err))
        //crypto/bonds/gold?
        //gainers
        axios.get("https://financialmodelingprep.com/api/v3/stock/gainers")
            .then(res => {
                this.setState({
                    gainers: res.data.mostGainerStock.slice(0, 3)
                })
            })
            .catch(err =>console.log(err))
        //losers
        axios.get("https://financialmodelingprep.com/api/v3/stock/losers")
            .then(res => {
                this.setState({
                    losers: res.data.mostLoserStock.slice(0, 3)
                })
            })
            .catch(err =>console.log(err))
    }

    getSearchList = () => {
        //searchlist
        axios.get("https://financialmodelingprep.com/api/v3/company/stock/list")
            .then(res => {
                this.setState({
                    searchList: res.data.symbolsList
                })
            })
            .catch(err =>console.log(err))
    }
    
    render() { 
        return (
            <StockDataContext.Provider
                value = {{
                    gainers: this.state.gainers,
                    losers: this.state.losers,
                    indexes: this.state.indexes,
                    searchList: this.state.searchList,
                    getGroupData: this.getGroupData,
                    getSearchList: this.getSearchList
                }}>
                {this.props.children}
            </StockDataContext.Provider>
        );
    }
}

export const withStockData = C => props => (
    <StockDataContext.Consumer>
        {value => <C {...value} {...props} />}
    </StockDataContext.Consumer>
)

export default StockDataProvider;
