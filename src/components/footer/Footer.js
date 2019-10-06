import React from 'react';
import './style.css';

const Footer = () => {
    return (
     <footer className="footer">
        <div>Stocks.<i>wheeeee!</i> is not responsible for your financial decisions</div>
        <div className="footer-links">
            <a href="http://www.linkedin.com/in/djclayton21" className = 'fab fa-linkedin'><span>LinkedIn</span></a>
            {/* <a href="http://www.linkedin.com/in/djclayton21">Portfolio</a> */}
            <a href="http://www.github.com/djclayton21" className ='fab fa-github'><span>Github</span></a>
        </div>
    </footer> );
}
 
export default Footer;