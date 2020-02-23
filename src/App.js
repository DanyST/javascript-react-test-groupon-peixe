import React from "react";
import { NavBar, PhotoInfo } from './widgets';
import "./App.css";

const MOVIE = {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "tt4116284",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
}

function App() {
    return (
        <>
            <NavBar/>
            <PhotoInfo url={MOVIE.Poster} name={MOVIE.Title} year={MOVIE.Year}/>
        </> 
    );
}

export default App;
