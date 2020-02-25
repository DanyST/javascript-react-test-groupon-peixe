import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { MoviesShowcase } from "../../widgets";
import * as actions from "../../redux/popularMovies/action";
import { postFavorite } from "../../redux/favoriteMovies/action";

const Home = () => {
    // Props from redux
    const { list, isFetching } = useSelector(
        state => ({
            list: state.popularMovies.list,
            isFetching: state.popularMovies.isFetching
        }),
        shallowEqual // For rendering only if there is changes in props and deep props
    );

    // Redux dispatch
    const dispatch = useDispatch();

    // Life Cycle
    useEffect(() => {
        dispatch(actions.fetchPopularMovieList());
    }, []);

    return (
        <Container className="mt-4 fluid">
            {!isFetching ? (
                <MoviesShowcase title="Popular Movies" movies={list} />
            ) : (
                <p className="lead text-center mt-2">Loading...</p>
            )}
        </Container>
    );
};

export default Home;
