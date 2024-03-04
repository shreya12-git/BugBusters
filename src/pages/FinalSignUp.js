import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const FinalSignUp = () => {
  const emailRef = useRef();  // Add useRef for email
  const passwordRef = useRef();  // Add useRef for password
  const otpRef = useRef();  // Add useRef for OTP

  const handleSignUp = async () => {
    if (
      emailRef.current.value === '' ||
      passwordRef.current.value === '' ||
      otpRef.current.value === ''
    ) {
      toast.error("All Fields are Required");
      return;
    }
    const signUpData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      otp: otpRef.current.value,
    };

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        body: JSON.stringify(signUpData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Signed up successfully");
        emailRef.current.value = '';
        passwordRef.current.value = '';
        otpRef.current.value = '';
      } else if (data.message === 'not') {
        alert('OTP NOT VALID');
        emailRef.current.value = '';
        otpRef.current.value = '';
        passwordRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>||स्वागतम्||</h2>
      <label>
        <span>UserName/Email</span>
        <input type="email" ref={emailRef} name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" ref={passwordRef} name="password" />
      </label>
      <label>
        <span>Confirm Password</span>
        <input type="password" ref={passwordRef} name="confirmPassword" />
      </label>
      <br />
      <br />
      <Link to='/'>
        <button className="submit" type="button">
          Send OTP
        </button>
      </Link>
      <label>
        <span>Enter OTP</span>
        <input type="password" ref={otpRef} name="otp" />
      </label>
      <Link to='/'>
        <button className="submit" type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default FinalSignUp;
