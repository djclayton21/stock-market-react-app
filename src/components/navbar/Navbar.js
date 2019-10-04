import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className= "navbar-title">Stocks.<i>wheeeee!</i></div>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/watch-list'>Watch List</Link>
                <Link to='/search'>Search</Link>
            </div>
        </div>
     );
}
 
export default Navbar;