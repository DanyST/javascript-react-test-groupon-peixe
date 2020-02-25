import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { MoviesShowcase } from "../../widgets";
import * as actions from "../../redux/searchMovies/action";

const Search = props => {
    const { list, isFetching } = useSelector(
        state => ({
            list: state.searchMovies.list,
            isFetching: state.searchMovies.isFetching
        }),
        shallowEqual
    );

    const dispatch = useDispatch();

    // Life Cycle
    useEffect(() => {
        dispatch(actions.fetchSearchMovieByTitle(props.query));
    }, []);

    return (
        <Container className="mt-4 fluid">
            {!isFetching ? (
                <MoviesShowcase title="Search Results" movies={list} />
            ) : (
                <p className="lead text-center mt-2">Loading...</p>
            )}
        </Container>
    );
};

Search.defaultProps = {
    query: ""
};

export default Search;
