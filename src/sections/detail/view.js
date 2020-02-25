import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { LoaderButton } from "../../widgets";
import * as actions from "../../redux/detailedMovie/action";
import * as favoriteActions from "../../redux/favoriteMovies/action";

const Detail = props => {
    const dispatch = useDispatch();

    const { movie, isFetching, isFavorite } = useSelector(
        state => ({
            movie: state.detailedMovie.movie,
            isFetching: state.detailedMovie.isFetching,
            isFavorite: state.detailedMovie.isFavorite
        }),
        shallowEqual
    );

    useEffect(() => dispatch(actions.fetchMovieDetail(props.movieId)), []);

    const toggleFavorite = () => {
        dispatch(favoriteActions.toggleStoreFavorite(movie, !isFavorite));
        dispatch(actions.updateFavoriteToggle(!isFavorite));
    };

    return (
        <Container className="mt-4">
            {!isFetching && movie ? (
                <Row>
                    <Col md="4" className="text-left">
                        <Image src={movie.Poster} alt={movie.Title} />
                        <LoaderButton
                            loading={isFetching}
                            className="mt-2"
                            variant={!isFavorite ? "success" : "danger"}
                            onClick={toggleFavorite}
                        >
                            {!isFavorite ? "Add favorite" : "Remove favorite"}
                        </LoaderButton>
                    </Col>
                    <Col md="8">
                        <Row className="mb-2">
                            <Col>
                                <h2>
                                    {movie.Title} ({movie.Year})
                                </h2>
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Rated:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Rated}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Released:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Released}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Runtime:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Runtime}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Genre:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Genre}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Director:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Director}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Writers:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Writer}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Actors:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Actors}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Plot:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Plot}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Language:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Language}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Country:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Country}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Awards:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Awards}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">Metascore:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.Metascore}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col md="2">imdbRating:</Col>
                            <Col md="10" className="font-weight-light">
                                {movie.imdbRating}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ) : (
                <p className="lead text-center mt-2">Loading...</p>
            )}
        </Container>
    );
};

Detail.defaultProps = {
    movieId: ""
};

export default Detail;
