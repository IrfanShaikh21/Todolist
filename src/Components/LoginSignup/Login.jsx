import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className='loginsignupfields'>
          <input type="text" placeholder='Your name' />
          <input type="email"  placeholder='Email Address'/>
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p>Already have account? <span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" />
          <p>Yes, I agree to the terms of use & pravacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
