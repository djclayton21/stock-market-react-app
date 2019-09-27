import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
    return ( 
        <div className="home">
            Home
            <Link to= '/details/AAPL'>AAPL</Link>
            <Link to= '/details/TSLA'>TSLA</Link>
        </div> );
}
 
export default Home;