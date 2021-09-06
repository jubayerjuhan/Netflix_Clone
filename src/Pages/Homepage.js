import React from 'react'
import Banner from '../Components/Banner/Banner.js'
import Row from '../Components/Row/Row.js'
import requests from "./../request";
import '../App.css'
import Navbar from "./../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <div className="row-container">
          <Row title="NETFLIX ORIGINALS" isLarge={true} fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
      </div>
    </>
  )
}

export default Homepage
