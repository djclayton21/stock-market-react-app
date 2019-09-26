import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            Navbar
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/search'>Search</Link>
        </div>
     );
}
 
export default Navbar;