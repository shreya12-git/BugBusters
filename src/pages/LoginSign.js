import React, { useState, useEffect } from "react";
import "./LoginSign.css"; // Make sure to import your CSS file
import SignUpPage from "./SignUpPage.js";
// import Otp from "./Otp.js";
import FinalSignUp from "./FinalSignUp.js";
import { Link } from "react-router-dom";
// import SignUpPage from "./SignUpPage.js";

const LoginSign = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [isotp, setIsOtp] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const toggleSignUp = () => {
    setSignUp((prevSignUp) => !prevSignUp);
  };
  const handleSendOtp = () => {
    console.log("OTP sent");
    setIsOtp(true);
  };
  const handleSubmit=()=>{
    console.log("The Submit Button is clicked");
    setIsSubmit(true);
  }

  useEffect(() => {
    const imgBtn = document.querySelector(".img-btn");
    const cont = document.querySelector(".cont");

    const handleButtonClick = () => {
      cont.classList.toggle("s-signup");
    };

    imgBtn.addEventListener("click", handleButtonClick);

    return () => {
      imgBtn.removeEventListener("click", handleButtonClick);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="mainlogin">
      <div className="cont">
        <div className={`form sign-in ${isSignUp ? "hidden" : ""}`}>
          <h2>||नमस्ते||</h2>
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
          <p className="forgot-pass">Forgot Password ?</p>
          <Link to='/profile'>
          <button className="submit" type="button">
            Log In
          </button>
          </Link>
          <div className="lines">
            <div className="firstline"></div>
            <br></br>
            <div>
              <h4>Or</h4>
            </div>
            <br></br>
            <div className="firstline"></div>
          </div>
          <div className="social-media">
            <button className="face-login-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="28"
                viewBox="0 0 36 38"
                fill="none"
              >
                <g clip-path="url(#clip0_34_37)">
                  <path
                    d="M13.5 18.6042C12.465 18.6042 11.625 19.4908 11.625 20.5833C11.625 21.6758 12.465 22.5625 13.5 22.5625C14.535 22.5625 15.375 21.6758 15.375 20.5833C15.375 19.4908 14.535 18.6042 13.5 18.6042ZM22.5 18.6042C21.465 18.6042 20.625 19.4908 20.625 20.5833C20.625 21.6758 21.465 22.5625 22.5 22.5625C23.535 22.5625 24.375 21.6758 24.375 20.5833C24.375 19.4908 23.535 18.6042 22.5 18.6042ZM18 3.16666C9.72 3.16666 3 10.26 3 19C3 27.74 9.72 34.8333 18 34.8333C26.28 34.8333 33 27.74 33 19C33 10.26 26.28 3.16666 18 3.16666ZM18 31.6667C11.385 31.6667 6 25.9825 6 19C6 18.5408 6.03 18.0817 6.075 17.6383C9.615 15.9758 12.42 12.92 13.89 9.13583C16.605 13.1892 21.075 15.8333 26.13 15.8333C27.3 15.8333 28.425 15.6908 29.505 15.4217C29.82 16.5458 30 17.7492 30 19C30 25.9825 24.615 31.6667 18 31.6667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_37">
                    <rect width="36" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              LogIn with FaceId
            </button>
            <button className="google-login-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="28"
                viewBox="0 0 36 38"
                fill="none"
              >
                <g clip-path="url(#clip0_25_19)">
                  <path
                    d="M35.649 19.4377C35.649 18.1461 35.5498 16.8476 35.3382 15.5769H18.36V22.8935H28.0826C27.6791 25.2532 26.3828 27.3407 24.4846 28.6671V33.4145H30.2851C33.6913 30.1053 35.649 25.2183 35.649 19.4377Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M18.36 38.0013C23.2147 38.0013 27.3088 36.3188 30.2917 33.4145L24.4912 28.6671C22.8774 29.826 20.794 30.4823 18.3666 30.4823C13.6707 30.4823 9.68907 27.1382 8.26045 22.6421H2.27478V27.5361C5.33045 33.9521 11.5542 38.0013 18.36 38.0013Z"
                    fill="#34A853"
                  />
                  <path
                    d="M8.25379 22.6421C7.4998 20.2824 7.4998 17.7272 8.25379 15.3675V10.4735H2.27474C-0.278266 15.8422 -0.278266 22.1674 2.27474 27.5361L8.25379 22.6421Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M18.36 7.5203C20.9263 7.47841 23.4065 8.4977 25.265 10.3687L30.4041 4.94414C27.15 1.71872 22.8311 -0.0545712 18.36 0.00128039C11.5542 0.00128039 5.33045 4.05052 2.27478 10.4734L8.25384 15.3674C9.67585 10.8644 13.6641 7.5203 18.36 7.5203Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_19">
                    <rect width="36" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              LogIn with Google
            </button>
          </div>
        </div>

        <div className={`sub-cont ${isSignUp ? "s-signup" : ""}`}>
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover a great amount of new opportunities!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn">
              <span
                className={`m-up ${isSignUp ? "active" : ""}`}
                onClick={toggleSignUp}
              >
                SignUp
              </span>
              <span
                className={`m-in ${!isSignUp ? "active" : ""}`}
                onClick={() => setSignUp(false)}
              >
                Log In
              </span>
            </div>
          </div>
          <div className={`form sign-up ${isSignUp ? "visible" : "hidden"}`}>

              <SignUpPage handleSendOtp={handleSendOtp} />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSign;
