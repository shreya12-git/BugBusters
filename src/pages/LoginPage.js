import React from "react";
import { Link } from "react-router-dom";

// import logo from "../assets/AYURVICHAAR.png";
import './LoginPage.css';
import LoginSign from "./LoginSign";
const LoginPage=()=>{
    return (
        <div>
        {/* <div>
           <nav className="navoflogin">
          <ul>
            <li>
              <Link to="/">
                <img
                  // src={logo}
                  width={100}
                  height={100}
                  style={{ borderRadius: "300px" }}
                  className="image"
                ></img>
              </Link>
            </li>
            <li>
              <h1 style={{ color: "#F2FBF2" }}>AyurVichaar</h1>
            </li>
           <div className="loginhac">
           <li>
              <Link to="/">Home</Link>
            </li>{" "}
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
           </div>
          
          </ul>
        </nav>
        </div> */}
        <div>
            <LoginSign></LoginSign>
        </div>
    </div>
    )
}
export default LoginPage;