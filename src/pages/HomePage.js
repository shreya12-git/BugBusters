import React from 'react';
import Nav from '../components/Navbar';
import Example from '../components/SlideSow';
import FeaturesPart from '../components/FeaturesPart';
import AboutUs from '../components/AboutUs';
const HomePage=()=>{
    return(

        <div>
        <div><Nav></Nav></div>
        <div><Example></Example></div>
        <div><FeaturesPart></FeaturesPart></div>
        <div><AboutUs></AboutUs></div>
        </div>
    
    );
};
export default HomePage;