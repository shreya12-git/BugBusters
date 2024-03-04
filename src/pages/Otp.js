import React, { useState, useEffect } from "react";
// import OtpInput from "react-otp-input";
import "./Otp.css";

const Otp = ({handleSubmit}) => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  


  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
  };
  return (
    <div className="otpsection">
      <h2>Enter OTP</h2>
      <div>
        <p className="entercla">
          Enter the 6-digit OTP received on your provided email
        </p>
      </div>
      {/* <OtpInput
        inputType="text"
        containerStyle="otpBox"
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={false}
        renderInput={(props) => <input {...props} />}
      /> */}
      <div className="countdown-text">
        {seconds > 0 || minutes > 0 ? (
          <p>
            Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        ) : (
          <p>Didn't recieve code?</p>
        )}

        <button
          disabled={seconds > 0 || minutes > 0}
          style={{
            color: seconds > 0 || minutes > 0 ? "gray" : "#1879DB",
            cursor: "pointer",
          }}
          onClick={resendOTP}
          className="resendbutton"
        >
          Resend OTP
        </button>
      </div>
      <div>
        <button className="otpSubmit" onClick={handleSubmit}> Submit </button>
      </div>

    </div>
  );
};

export default Otp;
