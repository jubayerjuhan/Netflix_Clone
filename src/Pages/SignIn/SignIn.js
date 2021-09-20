import React, { useContext, useState } from 'react'
import './SignIn.css'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseconfig";
import * as firebase from 'firebase/app'
import { LoggedUser } from '../../App.js';
import { useLocation, useHistory } from "react-router-dom";
import Navbar from "./../../Components/Navbar/Navbar";
firebase.initializeApp(firebaseConfig);

const SignIn = () => {
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser);
  const [loginData, setLoginData] = useState({});
  const provider = new GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const signInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)

      .then((result) => {
        const user = result.user;
        const updatedUser = { ...user, ...lgdUserInfo, isLoggedIn: true };
        setLgdUserInfo(updatedUser);
        history.replace(from); //* Redirect to the page where it wants to go 
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
      });
  }

  // Working On Email and pass change

  const handleEmailAndPassChange = e => {
    loginData[e.target.name] = e.target.value;
    setLoginData(loginData);
    console.log(loginData);
  }
  console.log(lgdUserInfo)

  const handlePassSignIn = (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        lgdUserInfo.isLoggedIn = true;
        const userContext = { ...user, ...lgdUserInfo }
        setLgdUserInfo(userContext)
        history.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        const copiedLgd = { ...lgdUserInfo }
        copiedLgd.error = "Email And Password Didn't Matched"
        setLgdUserInfo(copiedLgd);
      });

    e.preventDefault();

  }



  return (
    <div className="login-page">
      <Navbar></Navbar>
      <div className="login-container">
        <h1>Sign In</h1>
        <form className='login-form'>
          {/* onSubmit={this.handleSubmit} */}
          <div className="text-field">

            <input
              type="email"
              name='email'
              onChange={handleEmailAndPassChange}
              // value={email}
              required
            />
            <span className="form-label">Email Address</span>
          </div>

          <div className="text-field">
            <input
              onChange={handleEmailAndPassChange}
              type="password"
              name="password"
            />
            <span className="form-label">Password</span>
          </div>
          <button onClick={handlePassSignIn} type="submit" className="login-button">Sign In</button>
        </form>
        <button className="google-sign-in"
          onClick={signInWithGoogle}
        > Sign in with Google
        </button>

        {lgdUserInfo?.error ? <p className="sign-up-text">{lgdUserInfo.error}</p> : ''}

        <p className="sign-up-text">New to Netflix? <span
          onClick={() => history.push('/register')}
        > Sign up now.</span></p>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </div>
      <div className="black-overlay"></div>

    </div>
  )
}

export default SignIn
