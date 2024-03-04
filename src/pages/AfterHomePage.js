import React from 'react';
import Nav from '../components/Navbar';
import Example from '../components/SlideSow';
import FeaturesPart from '../components/FeaturesPart';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AfterHomePage=()=>{
    return(
        
        <div>
        <div><Nav></Nav></div>
        <div><Example></Example></div>
        <br></br>
        <br></br>
        <div><FeaturesPart></FeaturesPart></div>
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