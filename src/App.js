import React, { Component} from 'react';
import { Route , Switch} from 'react-router-dom'
import './style.css';

import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import SearchPage from './components/search/SearchPage.js';
import StockDetails from './components/details/StockDetails.js';
import { withStockData } from './context/StockDataProvider';


class App extends Component {
    componentDidMount(){
        this.props.getGlobalData()
    }

    render() {
        return ( 
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path='/' component= {Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/search' component={SearchPage}/>
                    <Route path='/details/:ticker' render={rProps => <StockDetails {...rProps} />}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}
 
export default withStockData(App);