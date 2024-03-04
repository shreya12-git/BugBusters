import React from 'react';
import Nav from '../components/Navbar';
import Example from '../components/SlideSow';

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Nav1 from '../components/Navbar2';
import FeatureCard2 from '../components/FeatureCard2';
import { Card1Presentation } from '../components/skillscard';
import { Card2 } from '../components/allprojectscard';

const AfterHomePage=()=>{
    return(

        <div>
        <div><Nav1></Nav1></div>
        <div><Example></Example></div>
        <br></br>
        <br></br>
        <div><Card1Presentation></Card1Presentation></div>
        <br></br>
        <br></br>
        <div style={{fontSize:"40px", fontWeight:"bold",display:"flex", justifyContent:"center" }}> All projects</div>
        <div><Card2></Card2></div>
        <div><AboutUs></AboutUs></div>
        <br></br>
        <br></br>
        <div><Footer></Footer></div>
        </div>
    
    );
};
export default AfterHomePage;