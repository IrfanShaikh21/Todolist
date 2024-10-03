import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignupfields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={handleContinue}>Continue</button>
        <p>
          Already have an account? <span>Login Here</span>
        </p>
        <div className="agree">
          <input type="checkbox" />
          <p>Yes, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
