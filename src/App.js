import './App.css';
import requests from "./request";
import Row from "./Components/Row/Row";
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  return (
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
  );
}

export default App;
