import React from "react";
import { Container } from "react-bootstrap";
import { MoviesShowcase } from "../../widgets";

const MOVIES = {
    Search: [
        {
            Title: "Batman Begins",
            Year: "2005",
            imdbID: "tt0372784",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
            Title: "Batman v Superman: Dawn of Justice",
            Year: "2016",
            imdbID: "tt2975590",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            Title: "Batman",
            Year: "1989",
            imdbID: "tt0096895",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
        },
        {
            Title: "Batman Returns",
            Year: "1992",
            imdbID: "tt0103776",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
        }
    ]
};

const Home = props => {
    return (
        <Container className="mt-4">
            <MoviesShowcase title="Popular Movies" movies={MOVIES.Search}/>
        </Container>
    );
};

export default Home;
