import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './sections/home';
import Detail from './sections/detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={Detail} />
    </Switch>
);

export default Routes;

export const routes = {
    home: () => '/',
    detail: (movieId) => `/movie/${movieId}`,
};
