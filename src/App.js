import React from "react";
import { NavBar } from "./widgets";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import history from "./config/historyRouter";
import { store } from './config/redux';
import { Provider } from 'react-redux';
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <NavBar />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
