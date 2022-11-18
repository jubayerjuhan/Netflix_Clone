import React, { useEffect, useState } from "react";
import axios from "../../axios.js";
import "./MyList.style.css";

const MyListRow = ({ id, movie }) => {
  // console.log();
  const posterBaseUrl = `https://image.tmdb.org/t/p/original/`;

  return (
    <div className="movie__card">
      <img
        className="poster"
        src={`${posterBaseUrl}${movie.poster_path}`}
        alt="Poster"
      />
      <p>{movie?.name || movie?.title || movie?.original_title}</p>
    </div>
  );
};

export default MyListRow;
