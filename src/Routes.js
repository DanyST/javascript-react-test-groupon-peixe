import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './sections/home';
import Detail from './sections/detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" render={ ({ match }) => {
            // utilizar render nos permite abstraer el routing fuera del componente
            // de esta manera Detail recibe el movieId en lugar de recibir el
            // match del router, con lo que reducimos su acoplamiento.
            const { movieId } = match.params;
            return <Detail movieId={movieId} />
        }} />
    </Switch>
);

export default Routes;

export const routes = {
    home: () => '/',
    detail: (movieId) => `/movie/${movieId}`,
};
