import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoggedUser } from '../../App.js';
import './Navbar.css'
const Navbar = () => {
  const [lgdUserInfo] = useContext(LoggedUser);
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else handleShow(false);

      return () => {
        window.removeEventListener('scroll');
      }
    })
  }, [])
  return (
    <div className={`nav ${show && 'navBlackBg'}`}>
      <div className="nav-container">
        <Link to='/' className="nav-logo">
          <img className='nav-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" /></Link>


        {lgdUserInfo?.userPhoto || lgdUserInfo.isLoggedIn ?
          <img className='nav-avatar' src={lgdUserInfo?.userPhoto || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="User Profile Pic" /> :
          <Link to='/sign-in'>
            <button className='sign__in__btn'>Sign In</button>
          </Link>
        }

      </div>
    </div>
  )
}

export default Navbar
