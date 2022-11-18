import React, { useContext, useEffect, useState } from "react";
import MyListRow from "./MyListRow.js";
import "./MyList.style.css";
import Navbar from "./../../Components/Navbar/Navbar";
import { LoggedUser } from "../../App.js";
import { getFromLocalStorage } from "../../storage/localstorage.js";

const Mylist = () => {
  const [movies, setMovies] = useState([]);
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser);

  useEffect(() => {
    const myList = getFromLocalStorage("mymovies");
    setMovies(myList);
  }, []);

  return (
    <>
      <Navbar />
      <div className="movie__container">
        <h1 className="myListTitle">My List</h1>
        <div className="poster__container">
          {localStorage?.length === 0 ? (
            <div className="empty__div">
              <h1 className="empty_header">My List Empty</h1>
              <p className="empty_text">Please add some movies</p>
            </div>
          ) : (
            movies?.map((movie, index) => (
              <MyListRow key={index} movie={movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Mylist;
