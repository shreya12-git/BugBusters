import React from "react";
import { Link } from "react-router-dom";
const SignUpPage = ({handleSendOtp}) => {
  return (
    <div>
      <h2>||स्वागतम्||</h2>

      <label>
        <span>Email</span>
        <input type="email" />
      </label>

      <button type="button" className="submit" style={{ marginTop: "50px" }} onClick={handleSendOtp}>
        Send OTP
      </button>
      <div className="lines">
        <div className="firstline"></div>
        <br></br>
        <div>
          <h4>Or</h4>
        </div>
        <br></br>
        <div className="firstline"></div>
      </div>

      <Link to='./doctorsPage'>
      <button type="button" className="submit" style={{ marginTop: "50px" }}>
        Sign Up as Doctor
      </button>
      </Link>
    </div>
  );
};
export default SignUpPage;
