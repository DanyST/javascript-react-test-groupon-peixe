import React from "react";
import { Row, Col } from "react-bootstrap";
import { PhotoInfo } from "../../widgets";
import "./style.css";

const MoviesShowcase = props => {
    return (
        <>
            <Row>
                <h2>{props.title}</h2>
            </Row>
            <Row>
                {props.movies && props.movies.length > 0 ? (
                    props.movies.map(movie => (
                        <Col md={3} xs={8} key={movie.imdbID}>
                            <a>
                                <PhotoInfo 
                                    containerClassName="showcase__item"
                                    imgClassName="shadow rounded showcase__image"                                    
                                    imgOverlayClassName="rounded-bottom shadow showcase__image"
                                    url={movie.Poster}
                                    name={movie.Title}
                                    year={movie.Year}
                                />
                            </a>
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
    title: ""
};

export default MoviesShowcase;
