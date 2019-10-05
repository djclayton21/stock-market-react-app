import React from 'react';
import './style.css'

const About = () => {
    return ( 
        <main className="about-page">
            <div className="about-container">
                <h3>Thanks for Visiting!</h3>
                <p>This is my first front end project using React with data from an external API.</p>
                <p>Big thanks to <a href="https://financialmodelingprep.com">financialmodelingprep.com</a> for maintaining an easy to use free api with a ton of data to play with.</p>
                <div>Other Components:</div>
                <ul>
                    <li>Victory Charts</li>
                    <li>React Paginate</li>
                </ul>
                <p>The Github repo can be found <a href="https://www.github.com/djclayton21">here</a></p>
            </div>
        </main>
    );
}
  
export default About;