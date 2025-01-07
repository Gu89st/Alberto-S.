import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo3 from "../Imagenes/Logo2.png";
import Connection from "./Connection";


const MyNavbar = () => {

 
    return (
        <Navbar className="navbar" expand="lg" >
            <Container>
                <Navbar.Brand href="/Inicio">
                <img src={Logo3} alt="Logo3" width={100} height={100}   />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="navbar-nav " variant="underline" >
                        {Connection.map((link,index)=>(
                            <   Nav.Link key={index} as={Link} to={link.path}>{link.label}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
