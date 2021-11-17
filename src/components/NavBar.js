import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <>
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
    )
}

export default NavBar
