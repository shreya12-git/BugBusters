import React from "react";
import { Link } from "react-router-dom";
const FinalSignUp=()=>{
    return(
        <div>
             <h2>||स्वागतम्||</h2>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="442"
            height="7"
            viewBox="0 0 442 7"
            fill="none"
          >
            <path
              d="M0.113249 3.5L3 6.38675L5.88675 3.5L3 0.613249L0.113249 3.5ZM441.887 3.5L439 0.613249L436.113 3.5L439 6.38675L441.887 3.5ZM3 4H439V3H3V4Z"
              fill="black"
            />
          </svg> */}
          <label>
            <span>UserName/Email</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="password" />
          </label>
          <br></br>
          <br></br>
          <Link to='/'>
          <button className="submit" type="button" >
            Send OTP
          </button>
          </Link>
          <label>
            <span>Enter OTP</span>
            <input type="password" name="password" />
          </label>
          <Link to='/'>
          <button className="submit" type="button" >
            Sign Up
          </button>
          </Link>
        </div>
    )
}
export default FinalSignUp;