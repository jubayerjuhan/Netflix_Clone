import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import requests from '../../request.js'
import { LoggedUser } from "./../../App";

const Banner = () => {
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchBannerMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchBannerMovie();
  }, [])
  console.log(movie)

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  //Add Banner Movie To My myList
  const handlemyList = (movieId) => {

    const updatedContext = { ...lgdUserInfo, myList: [...lgdUserInfo.myList, movieId] };
    const uniqueId = [...new Set(updatedContext.myList)]
    updatedContext.myList = uniqueId;
    console.log(updatedContext);
    setLgdUserInfo(updatedContext);
    alert('Added To My List')
    localStorage.setItem('myList', JSON.stringify(updatedContext.myList));
  }
  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__container'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__Button">Play</button>
          <button
            className="banner__Button"
            onClick={() => handlemyList(movie.id)}>My List</button>
        </div>
        <p className="banner__description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>

  )
}

export default Banner
