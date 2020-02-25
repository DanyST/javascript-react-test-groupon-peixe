import React from "react";
import { Row, Col } from "react-bootstrap";
import { PhotoInfo } from "../../widgets";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import "./style.css";

const MoviesShowcase = props => {
    return (
        <>
            <Row className="mb-2">
                <Col>
                    <h2>{props.title}</h2>
                </Col>
            </Row>
            <Row>
                {props.movies && props.movies.length > 0 ? (
                    props.movies.map(movie => (
                        <Col md={3} xs={12} key={movie.imdbID} className="mb-4">
                            <Link
                                to={routes.detail(movie.imdbID)}
                                onClick={() => props.onMovieClick(movie)}
                            >
                                <PhotoInfo
                                    containerClassName="showcase__item"
                                    imgClassName="shadow rounded showcase__image"
                                    imgOverlayClassName="rounded-bottom shadow showcase__image"
                                    url={movie.Poster}
                                    name={movie.Title}
                                    year={movie.Year}
                                />
                            </Link>
                        </Col>
                    ))
                ) : (
                    <p>There are not movies available :(</p>
                )}
            </Row>
        </>
    );
};

MoviesShowcase.defaultProps = {
    movies: [],
    title: "",
    onMovieClick: () => {}
};

export default MoviesShowcase;
