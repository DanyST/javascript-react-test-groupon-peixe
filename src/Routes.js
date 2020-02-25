import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./sections/home";
import Detail from "./sections/detail";
import Favorites from "./sections/favorites";
import Search from "./sections/search";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route
            path="/movie/:movieId"
            render={({ match }) => {
                // Utilizar render nos permite abstraer el routing fuera del componente
                // de esta manera Detail recibe el movieId en lugar de recibir el
                // match del router, con lo que reducimos su acoplamiento.
                const { movieId } = match.params;
                return <Detail movieId={movieId} />;
            }}
        />
        <Route path="/myfavorites" component={Favorites} />
        <Route
            path="/search?q=:query"
            render={({ match }) => {
                const { query } = match.params;
                return <Search query={query} />;
            }}
        />
    </Switch>
);

export default Routes;

export const routes = {
    home: () => "/",
    detail: movieId => `/movie/${movieId}`,
    favorites: () => "/myfavorites",
    search: query => `/search?q=${query}`
};
