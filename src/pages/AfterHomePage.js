import React from 'react';
import Nav from '../components/Navbar';
import Example from '../components/SlideSow';

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Nav1 from '../components/Navbar2';
import FeatureCard2 from '../components/FeatureCard2';

const AfterHomePage=()=>{
    return(

        <div>
        <div><Nav1></Nav1></div>
        <div><Example></Example></div>
        <br></br>
        <br></br>
        <div><FeatureCard2></FeatureCard2></div>
        <br></br>
        <br></br>
        <div><AboutUs></AboutUs></div>
        <br></br>
        <br></br>
        <div><Footer></Footer></div>
        </div>
    
    );
};
export default AfterHomePage;