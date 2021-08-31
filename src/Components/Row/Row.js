import React, { useEffect, useState } from 'react'
import axios from '../../axios.js'
import './Row.css'

function Row({ title, fetchUrl, isLarge }) {
  const posterBaseUrl = `https://image.tmdb.org/t/p/original/`
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies)
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className={`row-posters`}>
        {/* all movie posters */}
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`movie-poster ${isLarge && "row-posterLarge"}`}
            src={`${posterBaseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>


    </div>
  )
}

export default Row
