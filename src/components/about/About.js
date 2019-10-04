import React from 'react';
import './style.css'

const About = () => {
    return ( 
        <div className="about">
            <h3>Thanks for Visiting!</h3>
            <p>This is my first front end project using React with data from an external API.</p>
            <p>Big thanks to <a href="https://financialmodelingprep.com">financialmodelingprep.com</a>for maintaining an easy to use free api with a ton of data to play with.</p>
            <div>Other Components:</div>
            <ul>
                <li>Victory</li>
                <li>React Paginate</li>
            </ul>
                <br/><a href="https://www.github.com/djclayton21">github repo</a>
        </div>
    );
}
  
export default About;