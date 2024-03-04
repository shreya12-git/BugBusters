import React from 'react';
import FeatureCard from './FeatureCard';
const FeaturesPart=()=>{
    return(
        <div>
            <h1 style={{fontSize:"40px", fontWeight:"bold",display:"flex", justifyContent:"center" }}>Features</h1>
            <FeatureCard></FeatureCard>
        </div>
    );
};
export default FeaturesPart;