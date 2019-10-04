import React from 'react';
import './style.css';

const Footer = () => {
    return (
     <div className="footer">
        <div>Stocks.Wheee! is not responsible for your financial decisions</div>
        <div className="footer-links">
            <a href="http://www.linkedin.com/in/djclayton21">Linked In</a>
            {/* <a href="http://www.linkedin.com/in/djclayton21">Portfolio</a> */}
            <a href="http://www.github.com/djclayton21">Github</a>
        </div>
    </div> );
}
 
export default Footer;