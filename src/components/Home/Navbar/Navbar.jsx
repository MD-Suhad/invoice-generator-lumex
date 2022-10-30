import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {fad fa-sitemap} from "@fontaewsome/free-solid-svg-icons";
import './Navbar.css';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand style={{color:"white"}} href="#">Lumex Invoice Generator
        </Navbar.Brand>
        <FontAwesomeIcon icon="fad fa-sitemap" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse i d="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px", 
              marginLeft: "200px",
            }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="service-create">Invoice Create</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
