import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import RatingHeader from './RatingHeader';
import StockProfile from './StockPofile';


 class StockDetails extends Component{

     constructor(){
         super()
         this.state = {
            profile: {},
            priceHistory: [],
            rating: {}
         }
        }
        
        componentDidMount(){
            const { symbol } = this.props.match.params
            this.getStockRatings(symbol)
            this.getStockProfile(symbol)
            this.getStockPriceHistory(symbol)
        }

        getStockProfile = (stockSymbol) => {
            axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`)
                .then(response => {
                    this.setState({profile: response.data.profile})
                })
                .catch(error => console.log(error))
        }

        getStockPriceHistory = (stockSymbol) => {
            axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}`)
                .then(response => {
                    this.setState({priceHistory: response.data.historical})
                })
                .catch(error => console.log(error))
        }

        getStockRatings = (stockSymbol) => {
            axios.get(`https://financialmodelingprep.com/api/v3/company/rating/${stockSymbol}`)
                .then(response => {
                    this.setState({rating: response.data.rating})
                })
                .catch(error => console.log(error))
        }

        render(){
        const { symbol } = this.props.match.params
        return ( 
            <div className="stock-details">
                <RatingHeader symbol = {symbol} rating = {this.state.rating}/>
                <StockProfile symbol = {symbol} profile = {this.state.profile}/>
                chart
            </div>
        );
    }
}
 
export default StockDetails;