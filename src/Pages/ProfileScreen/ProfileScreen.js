import React, { useContext } from 'react'
import { getAuth, signOut } from "firebase/auth";
import './ProfileScreen.style.css'
import Navbar from "./../../Components/Navbar/Navbar";
import { LoggedUser } from "./../../App";
import { useHistory } from "react-router-dom";

const ProfileScreen = () => {
  const auth = getAuth();
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)
  const history = useHistory();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      lgdUserInfo.isLoggedIn = false;
      setLgdUserInfo({
        isLoggedIn: false,
        myList: []
      });
      history.push('/');
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div className='profile__screen'>
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profileScreen__details">
            <h2>{lgdUserInfo.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <button
                onClick={handleSignOut}
                className="profileScreen__signout">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
