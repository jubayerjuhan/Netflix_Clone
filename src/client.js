import axios from "axios";

export const movieInfoClient = axios.create({
  baseURL: "https://moviesdb5.p.rapidapi.com/om",
  headers: {
    "X-RapidAPI-Key": "f31dd70fb4mshb2781fdf89d320ap19f0a8jsnf1dc0aba9c9d",
    "X-RapidAPI-Host": "moviesdb5.p.rapidapi.com",
  },
});
