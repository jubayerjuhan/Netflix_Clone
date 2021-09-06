import React, { useEffect, useState } from 'react'
import axios from '../../axios.js'
import './MyList.style.css'

const MyListRow = ({ id }) => {
  console.log(id)
  const [movie, setMovie] = useState('')
  const posterBaseUrl = `https://image.tmdb.org/t/p/original/`

  useEffect(() => {
    const loadListMovies = async () => {
      const result = await axios.get(`/movie/${id}?api_key=09ff5e3fe871b58af9daf3c10f394cba`)
      console.log(result.data)
      setMovie(result.data);
    }
    loadListMovies();
  }, [id])

  return (
    <div className="movie__card">
      <img className="poster" src={`${posterBaseUrl}${movie.poster_path}`} alt="Poster" />
      <p>{movie.original_title}</p>
    </div>
  )
}

export default MyListRow
