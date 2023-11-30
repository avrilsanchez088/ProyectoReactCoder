import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link, NavLink } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={"/"} style={{textDecoration: "none", color: "blue"}} >Power Sport</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link to= "/">Home</Link>
            <Link to="#link">Sobre nosotros</Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to={"/category/a"} style={{textDecoration: "none", color: "blue"}} > Proteínas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"/category/a"} style={{textDecoration: "none", color: "blue"}} > Geles deportivos</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;