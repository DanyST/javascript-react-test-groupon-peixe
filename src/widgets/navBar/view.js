import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const NavBar = props => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">GEEKFLIX MOVIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Popular</Nav.Link>
                <Nav.Link href="#link">My Movies</Nav.Link>
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
