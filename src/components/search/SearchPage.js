import React, { Component }from 'react';
import './style.css';
import SimpleStock from '../assets/simple-stock/SimpleStock.js';
import { withStockData}  from '../../context/StockDataProvider.js'
import ReactPaginate from 'react-paginate'

class SearchPage extends Component {
    constructor(){
        super()
        this.state = {
            search: "",
            prevSearch: "",
            searchResult:{"0":[]},
            resultCount: 0,
            pageIndex: 0,
            pageCount: 0,
            resultsPerPage: 10
        }
    }

    handleSearch = (event) => {
        event.preventDefault()
        const { resultsPerPage, search } = this.state

        //get matching stocks
        const searchResults = this.searchStocks(search);
        
        //break array into pages
        const pagedSearchResults = {}
        const pageCount = Math.ceil(searchResults.length / resultsPerPage);
        
        for (let i = 0; i < pageCount; i++){
            pagedSearchResults[i] = searchResults.slice(i * resultsPerPage, (i + 1) * resultsPerPage)
        }

        this.setState({
            searchResult: pagedSearchResults,
            resultCount: searchResults.length,
            pageCount: pageCount,
            search: "",
            prevSearch: this.state.search,
            pageIndex: 0
        })
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handlePageClick = (page) => {
        this.setState({pageIndex: page.selected})
    }

    searchStocks = (searchTerm) => {
        const { searchList } = this.props
        const searchExp = new RegExp(searchTerm, 'i')

        const searched = searchList.filter(stock => searchExp.test(stock.symbol) || searchExp.test(stock.name))
        
        return searched
    }

    render(){
        const { searchResult, prevSearch, pageIndex, resultCount, pageCount } = this.state

        //map current page
        const stocksToDisplay = searchResult[`${pageIndex}`]

        let mappedStocks = []
        
        if (resultCount) {
            mappedStocks = stocksToDisplay.map(stock => (
                <SimpleStock 
                    name= {stock.name}
                    symbol= {stock.symbol}
                    price= {stock.price}
                    key= {stock.symbol}
                />
            ))
        }
        
        return ( 
            <div className="search-page">
                <form onSubmit= {this.handleSearch}>
                    <input 
                        type="text" 
                        name='search' 
                        value = {this.state.search} 
                        onChange= {this.handleChange} 
                        placeholder= 'search'
                    />
                    <button>Search</button>
                </form>

                {!!prevSearch.length && 
                    <div>
                        {`${resultCount} results for ${prevSearch}`}
                    </div>
                }

                {!!resultCount &&  
                    <>
                        {mappedStocks}

                        <ReactPaginate 
                            pageCount= {pageCount}
                            pageRangeDisplayed = {5}
                            marginPagesDisplayed = {1}
                            onPageChange= {this.handlePageClick}    
                        />
                    </>
                }
            </div>
        )
    }     
}

 
export default withStockData(SearchPage);