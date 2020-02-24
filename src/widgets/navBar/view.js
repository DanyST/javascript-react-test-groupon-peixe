import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { routes } from "../../Routes";

const NavBar = props => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Link className="navbar-brand" to={routes.home()}>
            GEEKFLIX MOVIE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-link" to={routes.home()}>
                    Popular Movies
                </NavLink>
                <NavLink className="nav-link" to="/wathlist">
                    Watch List
                </NavLink>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search a movie"
                    className="mr-sm-2"
                />
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
