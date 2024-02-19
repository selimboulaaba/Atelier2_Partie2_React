import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'

function NavigationBar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="">My Events</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar