import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="sm" className="mb-4">
            <Container fluid>
                <Navbar.Brand data-testid="NavBarBrand" href="">Weather-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link data-testid="NavBarHomeLink" href="">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link data-testid="NavBarLoginLink" href="">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
};

export default NavBar;