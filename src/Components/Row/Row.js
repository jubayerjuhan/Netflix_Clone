import React, { useContext, useEffect, useState } from 'react'
// import YouTube from 'react-youtube'
import axios from '../../axios.js'
import './Row.css'
import movieTrailer from 'movie-trailer';
import MovieDetail from '../MovieDetail/MovieDetail.js';
import { LoggedUser } from "./../../App";

function Row({ title, fetchUrl, isLarge }) {
  const posterBaseUrl = `https://image.tmdb.org/t/p/original/`
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [clickedMovie, setClickedMovie] = useState({})
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);




  // console.log(lgdUserInfo.ui.spinner)
  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    }
    else {
      setClickedMovie(movie)
      console.log('lalala', movie)
      const fetchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${movie?.name || movie.title || movie?.original_title} movie official trailera&key=AIzaSyBzIvPxKR_w4-UK78qsgaNl05k5KlNgSb8`
      fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
          const videoId = data.items[0].id.videoId || data.id.videoId
          setTrailerUrl(videoId)
        })
    }
  }


  // console.log(trailerUrl)
  return (
    <>
      <div className='row'>
        <h2 className='row__title'>{title}</h2>
        <div className='row-posters'>
          {/* all movie posters */}
          {movies?.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`movie-poster ${isLarge && "row-posterLarge"}`}
              src={`${posterBaseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))}
        </div>
        {trailerUrl && <MovieDetail trailerUrl={trailerUrl} movie={clickedMovie} />
          // <YouTube videoId={trailerUrl} opts={opts} />
        }
      </div>
    </>
  )
}

export default Row
