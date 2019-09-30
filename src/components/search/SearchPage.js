import React, { Component }from 'react';
import './style.css';
import SimpleList from '../assets/list/SimpleList.js';
import {withStockData} from '../../context/StockDataProvider.js'

class SearchPage extends Component {
    constructor(){
        super()
        this.state = {
            search: "",
            prevSearch: "",
            searchResult:[]
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newSearchResult = this.searchStocks(this.state.search)
        this.setState({
            searchResult: newSearchResult,
            search: "",
            prevSearch: this.state.search
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    searchStocks = (searchTerm) => {
        const { searchList } = this.props
        const search = new RegExp(searchTerm, 'i')

        const searched = searchList.filter(stock => search.test(stock.symbol) || search.test(stock.name))
        
        return searched
    }

    render(){
        const { searchResult, prevSearch } = this.state
        const mappedResult = searchResult.map(resultStock => (<div>{resultStock.name}</div>))
        return ( 
            <div className="search-page">
                <form onSubmit= {this.handleSubmit}>
                    <input 
                        type="text" 
                        name='search' 
                        value = {this.state.search} 
                        onChange= {this.handleChange} 
                        placeholder= 'search'
                    />
                    <button>Search</button>
                </form>

                {!!prevSearch.length && <div>{`${searchResult.length} results for ${prevSearch}`}</div>}
                
                {mappedResult}
                {/* <SimpleList /> */}
            </div>
        );
    }
}
 
export default withStockData(SearchPage);