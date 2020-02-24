import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const MOVIE_DETAIL = {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    Rated: "PG-13",
    Released: "25 Mar 2016",
    Runtime: "151 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Zack Snyder",
    Writer:
        "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
    Actors: "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
    Plot:
        'The general public is concerned over having Superman on their planet and letting the "Dark Knight" - Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack Superman.,Meanwhile Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and millionaire, tries to use his own advantages to fight the "Man of Steel".',
    Language: "English",
    Country: "USA",
    Awards: "14 wins & 33 nominations.",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
        {
            Source: "Internet Movie Database",
            Value: "6.5/10"
        },
        {
            Source: "Rotten Tomatoes",
            Value: "28%"
        },
        {
            Source: "Metacritic",
            Value: "44/100"
        }
    ],
    Metascore: "44",
    imdbRating: "6.5",
    imdbVotes: "596,317",
    imdbID: "tt2975590",
    Type: "movie",
    DVD: "19 Jul 2016",
    BoxOffice: "$293,792,936",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
    Response: "True"
};

const Detail = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md="4" className="text-left">
                    <Image src={MOVIE_DETAIL.Poster} alt={MOVIE_DETAIL.Title} />
                    <Button className="mt-2">Add to favorites</Button>
                </Col>
                <Col md="8">
                    <Row className="mb-2">
                        <Col>
                            <h2>
                                {MOVIE_DETAIL.Title} ({MOVIE_DETAIL.Year})
                            </h2>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Rated:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Rated}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Released:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Released}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Runtime:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Runtime}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Genre:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Genre}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Director:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Director}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Writers:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Writer}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Actors:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Actors}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Plot:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Plot}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Language:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Language}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Country:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Country}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Awards:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Awards}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">Metascore:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.Metascore}
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md="2">imdbRating:</Col>
                        <Col md="10" className="font-weight-light">
                            {MOVIE_DETAIL.imdbRating}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

Detail.defaultProps = {

}

export default Detail;
