import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"

export default function NavBar() {

    return (
        <NavBar exapnd="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                        <NavDropdown></NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    )
}


