import React from 'react'
import MyListRow from './MyListRow.js'
import './MyList.style.css'
import Navbar from "./../../Components/Navbar/Navbar";
const Mylist = () => {
  const myList = JSON.parse(localStorage.getItem('myList'))
  console.log(myList)
  return (
    <>
      <Navbar />
      <div className="movie__container">
        <h1 className="myListTitle">My List</h1>
        <div className="poster__container">
          {myList.map((movieId, index) => <MyListRow key={index} id={movieId} />)}
        </div>
      </div>
    </>
  )
}

export default Mylist
