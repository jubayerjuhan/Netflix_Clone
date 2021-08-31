import React, { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {
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
        <img className='nav-logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />

        <img className='nav-avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflx Avatar" />
      </div>
    </div>
  )
}

export default Navbar
