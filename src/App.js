import React from "react";
import { NavBar, SearchForm } from "./widgets";
import { Router } from "react-router-dom";
import Routes, { routes } from "./Routes";
import history from "./config/historyRouter";
import { store } from "./config/redux";
import { Provider } from "react-redux";
import { configureAxios } from "./webservices";
import "./App.css";

configureAxios();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <NavBar
                    renderSearchForm={() => (
                        <SearchForm
                            onSubmit={query => history.push(routes.search(query))}
                        />
                    )}
                />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
