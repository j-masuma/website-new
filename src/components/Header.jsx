import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className=" bg-dark text-white p-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav
            className="me-auto mr-4 my-lg-0 "
            style={{ maxHeight: "100px", paddingLeft: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "white" }}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: "white" }}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ color: "white" }}>
              Products
            </Nav.Link>
          </Nav>

          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
