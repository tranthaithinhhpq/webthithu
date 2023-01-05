import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Maway Thái</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
            <Link to="/user" className="nav-link">
              User
            </Link>
            {/* <Nav.Link href="#homee">Home</Nav.Link>
            <Nav.Link href="#link">User</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link> */}
          </Nav>

          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
          </NavDropdown>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
