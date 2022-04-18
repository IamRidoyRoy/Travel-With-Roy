import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='about container'>
            <div>
                <img src={require("../images/Ridoy_Roy.png")} alt="" />
            </div>
            <div>
                <h2>Name: Ridoy Roy</h2>
                <p>I am travel guide from Bangladesh. I also book hotel and transport ticket for you. I am trying to provide you all extra facilities.You just check me out, after that all responsibility is mine. My goal is to achieve to the top travel guide in the word within 2 years.</p>
            </div>
        </div>
    );
};

export default About;