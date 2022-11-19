import React from "react";
import YouTube from "react-youtube";
import "./MovieDetail.css";
import { useContext } from "react";
import { LoggedUser } from "./../../App";
import {
  getFromLocalStorage,
  saveAtLocalStorage,
} from "../../storage/localstorage.js";

const MovieDetail = ({ movie, trailerUrl, movieDetail }) => {
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  console.log(movieDetail, "19 movie detail");

  const handlemyList = (movie) => {
    let found = false;
    const localList = JSON.parse(localStorage.getItem("mymovies"));
    if (!localList || localList.length === 0) {
      return saveAtLocalStorage("mymovies", [movie]);
    }

    saveAtLocalStorage("mymovies", [...localList, movie]);

    console.log(getFromLocalStorage("mymovies"), "mymovies");
    alert("Item Added to The List");
  };

  return (
    <div className="movie_preview">
      <div className="details">
        <h1 className="movie__title">
          {movie?.name || movie?.title || movie?.original_title}
        </h1>
        <p className="movie__overview">
          {movie?.overview.length > 200
            ? movie?.overview.slice(0, 200) + " ..."
            : movie?.overview}
        </p>
        <div className="preview__Buttons">
          <button className="preview__button">Play</button>
          <button
            onClick={() => handlemyList(movie)}
            className="preview__button"
          >
            My List
          </button>
        </div>
        <div className="others__details">
          <p className="title">
            Genre : <span>{movieDetail?.Genre}</span>
          </p>
          <p className="title">
            Actors : <span>{movieDetail?.Actors}</span>
          </p>
          <p className="title">
            Runtime : <span>{movieDetail?.Runtime}</span>
          </p>
          <p className="title">
            Language : <span>{movieDetail?.Language}</span>
          </p>
          <p className="title">
            IMDb Rating :{" "}
            <span
              className={`${
                parseInt(movieDetail.imdbRating) > 5 ? "green" : "orange"
              }`}
            >
              {movieDetail.imdbRating}
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="video_section">
        <YouTube
          className="video-yt"
          opts={opts}
          videoId={trailerUrl}
        ></YouTube>
      </div>
    </div>
  );
};

export default MovieDetail;
