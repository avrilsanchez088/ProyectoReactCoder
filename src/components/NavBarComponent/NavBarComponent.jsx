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
        <Navbar.Brand><Link to={"/"} style={{textDecoration: "none", color: "rgb(5, 73, 119)", fontSize:"25px"}} >Power Sport</Link></Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav className="me-auto">
            
            <Link style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '18px 5px', fontSize:"16px"}} to= "/">Home</Link>
            <Link style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '18px 5px', fontSize:"16px"}} to="#link">Sobre nosotros</Link>
            <NavDropdown style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '10px 5px'}} title="Productos" >
              <NavDropdown.Item  ><Link style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '10px 5px'}} to={"/category/protein"} > Proteínas</Link></NavDropdown.Item>
              <NavDropdown.Item  ><Link style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '10px 5px'}} to={"/category/energizing"} > Energizantes</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"/category/geles"} style={{textDecoration: "none", color: "rgb(5, 73, 119)", margin: '10px 5px'}} > Geles deportivos</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;