import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';
import img1 from '../assets/s1.jpg';
import img2 from '../assets/s2.jpg';
import img3 from '../assets/s3.jpg';
import Typewriter from 'typewriter-effect';

const Example = () => {
    return (
        <Slide arrows={false}>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img1})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div >
                        <Typewriter
                            options={{
                                strings: ['Welcome VIT Lions!!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                        <br />
                        <p style={{ color: "white" ,fontSize:"20px", textAlign:"center"}}>
                           Get a Chance to Connect and Collaborate with Your People!!
                        </p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img2})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <Typewriter
                            options={{
                                strings: ['Welcome VIT Lions!!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                        <br></br>
                        <p style={{ color: "white",fontSize:"20px" ,textAlign:"center"}}>
                        Get a Chance to Connect and Collaborate with Your People!!
                        </p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${img3})`, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <Typewriter
                            options={{
                                strings: ['Welcome VIT Lions!!'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                        <br></br>
                        <p style={{ color: "white" ,fontSize:"20px", textAlign:"center"}}>
                        Get a Chance to Connect and Collaborate with Your People!!
                        </p>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Example;
