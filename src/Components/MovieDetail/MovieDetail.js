import React from 'react'
import YouTube from 'react-youtube'
import './MovieDetail.css'
import { useContext } from 'react'
import { LoggedUser } from "./../../App";

const MovieDetail = ({ movie, trailerUrl }) => {
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    }
  }

  console.log(lgdUserInfo);

  const handlemyList = (movieId) => {
    const previousMovies = JSON.parse(localStorage.getItem('myList'))

    const updatedContext = { ...lgdUserInfo, myList: [...lgdUserInfo.myList, ...previousMovies, movieId] };
    const uniqueId = [...new Set(updatedContext.myList)]
    updatedContext.myList = uniqueId;
    console.log(updatedContext);
    setLgdUserInfo(updatedContext);
    alert('Added To My List')
    localStorage.setItem('myList', JSON.stringify(updatedContext.myList));
  }

  console.log(lgdUserInfo)
  return (
    <div className='movie_preview'>
      <div className='details'>
        <h1 className='movie__title'>{movie?.name || movie?.title || movie?.original_title}</h1>
        <p className='movie__overview'>{movie?.overview.length > 200 ? movie?.overview.slice(0, 200) + " ..." : movie?.overview}</p>
        <div className="preview__Buttons">
          <button className="preview__button">Play</button>
          <button
            onClick={() => handlemyList(movie.id)}
            className="preview__button">My List</button>
        </div>
      </div>
      <div className='video_section'>
        <YouTube className="video-yt" opts={opts} videoId={trailerUrl}></YouTube>
      </div>

    </div>
  )
}

export default MovieDetail
