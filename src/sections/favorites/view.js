import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MoviesShowcase } from "../../widgets";
import * as actions from "../../redux/favoriteMovies/action";

const FavoriteMovies = () => {
    const { list, isFetching } = useSelector(
        state => ({
            list: state.favoriteMovies.list,
            isFetching: state.favoriteMovies.isFetching
        }),
        shallowEqual
    );

    const dispatch = useDispatch();

    useEffect(() => dispatch(actions.fetchFavoritesList()), []);

    return (
        <Container className="mt-4 fluid">
            {!isFetching ? (
                list.length > 0 ? (
                    <MoviesShowcase title="My Favorites" movies={list} />
                ) : (
                    <>
                        <h2 className="mt-2">My Favorites</h2>
                        <p className="lead mt-2">
                            There are not favorites yet :(. Add your favorites
                            movies.
                        </p>
                    </>
                )
            ) : (
                <p className="lead text-center mt-2">Loading...</p>
            )}
        </Container>
    );
};

export default FavoriteMovies;
