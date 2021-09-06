import React, { useEffect, useState } from 'react'
// import YouTube from 'react-youtube'
import axios from '../../axios.js'
import './Row.css'
import movieTrailer from 'movie-trailer';
import MovieDetail from '../MovieDetail/MovieDetail.js';

function Row({ title, fetchUrl, isLarge }) {
  const posterBaseUrl = `https://image.tmdb.org/t/p/original/`
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [clickedMovie, setClickedMovie] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

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
      setClickedMovie(movie);
      movieTrailer(movie?.name || movie?.title || movie?.original_title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }


  // console.log(trailerUrl)
  return (
    <div className="row">
      <h2 className='row__title'>{title}</h2>

      <div className={`row-posters`}>
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
  )
}

export default Row
