import React, { useContext, useState } from 'react'
import Banner from '../Components/Banner/Banner.js'
import Row from '../Components/Row/Row.js'
import requests from "./../request";
import '../App.css'
import Navbar from "./../Components/Navbar/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoggedUser } from "./../App";


const Homepage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
  const [lgdUserInfo, setLgdUserInfo] = useContext(LoggedUser)
  const [spinner, setSpinner] = useState(true);
  lgdUserInfo.ui.spinner = spinner;

  setTimeout(() => {
    setSpinner(false);
  }, 1000);

  return (
    <>
      <div className="app">
        <Navbar />
        {lgdUserInfo.ui.spinner ? (
          <div className="spinner-container">
            <CircularProgress
              className="spinner" />
          </div>) :
          (<>
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
          </>)
        }
      </div>
    </>
  )
}

export default Homepage
