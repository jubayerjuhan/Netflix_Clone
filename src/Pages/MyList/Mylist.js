import React from 'react'
import MyListRow from './MyListRow.js'
import './MyList.style.css'
import Navbar from "./../../Components/Navbar/Navbar";
const Mylist = () => {
  const myList = JSON.parse(localStorage.getItem('myList'))

  // console.log(myList)
  return (
    <>
      <Navbar />
      <div className="movie__container">
        {/* <h1 className="myListTitle">My List</h1> */}
        <div className="poster__container">
          {
            localStorage.length === 0 ?
              <div className="empty__div">
                <h1 className='empty_header'>My List Empty</h1>
                <p className='empty_text'>Please add some movies</p>
              </div> :
              myList.map((movieId, index) => <MyListRow key={index} id={movieId} />)
          }
        </div>
      </div>
    </>
  )
}

export default Mylist
