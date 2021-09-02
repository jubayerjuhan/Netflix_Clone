import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Register.style.css'
import { useHistory } from 'react-router-dom';
import { LoggedUser } from '../../App.js';

const Register = () => {
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)
  const [regData, setRegData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const history = useHistory();
  const handleChange = e => {
    let isFieldvalid = true;
    if (e.target.name === 'email') {
      isFieldvalid = /\S+@\S+\.\S+/.test(e.target.value)
    }

    if (e.target.name === 'confirmPassword' && 'password') {
      const isPassLValid = (e.target.value).length > 3;
      const isPassHasNum = /[0-9]/g.test(e.target.value);
      const ispassValid = isPassHasNum && isPassLValid;
      isFieldvalid = ispassValid;
    }
    if (isFieldvalid) {
      const copiedRegData = { ...regData }
      copiedRegData[e.target.name] = e.target.value;
      setRegData(copiedRegData);
    }
    console.log(isFieldvalid)
  }
  console.log(regData)

  const handleSubmit = (e) => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, regData.email, regData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user)
        const mrgContextAndUser = { ...lgdUserInfo, ...user };
        mrgContextAndUser.isLoggedIn = true;
        setLgdUserInfo(mrgContextAndUser);
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    e.preventDefault();
  }
  console.log(lgdUserInfo)
  return (
    <div className="register-page">

      <div className="register-container">
        <h1>Sign Up</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="text-field">

            <input
              type="text"
              name='name'
              onChange={handleChange}
              required
            />
            <span className="form-label">Full Name</span>
          </div>

          <div className="text-field">

            <input
              type="email"
              name='email'
              onChange={handleChange}
              required
            />
            <span className="form-label">Email Address</span>
          </div>

          <div className="text-field">
            <input
              type="password"
              name='password'
              onChange={handleChange}
              required
            />
            <span className="form-label">Password</span>
          </div>

          <div className="text-field">
            <input
              type="password"
              name='confirmPassword'
              onChange={handleChange}
              required
            />
            <span className="form-label">Confirm Password</span>
          </div>


          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </div>
      <div className="black-overlay"></div>

    </div>
  )
}

export default Register
