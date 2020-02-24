import React from "react";
import { NavBar } from "./widgets";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import history from "./config/historyRouter";
import "./App.css";

function App() {
    return (
        <Router history={history}>
            <NavBar />
            <Routes />
        </Router>
    );
}

export default App;
