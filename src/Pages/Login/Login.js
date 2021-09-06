import React from 'react'
import './Login.style.css'

const Login = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className='loginScreen__logo'
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo" />
        <button className='loginScreen__button'>Sign In</button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          <h1>Unlimited films, TV Programs and More</h1>
        </div>
      </div>
    </div>
  )
}

export default Login
