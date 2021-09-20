import React, { useContext, useEffect, useState } from 'react'
import { LoggedUser } from '../../App.js';
import './Navbar.css'
import { useHistory, Link } from "react-router-dom";
const Navbar = () => {
  const [lgdUserInfo] = useContext(LoggedUser);
  const [show, handleShow] = useState(false);

  const history = useHistory();
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

        {lgdUserInfo?.photoURL || lgdUserInfo.isLoggedIn ?
          <div className="nav-menu">
            <p className='my__list' onClick={() => history.push('/user/my-list')}>My List</p>
            <img className='nav-avatar' onClick={() => history.push('/user/profile')} src={lgdUserInfo?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="User Profile Pic" />
          </div>
          :
          <Link to='/sign-in'>
            <button className='sign__in__btn'>Sign In</button>
          </Link>
        }

      </div>
    </div>
  )
}

export default Navbar
