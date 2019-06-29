import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">FRIDA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#location"
                onSelect={selectedKey => alert("1914 Grand Ave, Glenwood Springs, CO")}
              >Location</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#about/hours">Hours</NavDropdown.Item>
                <NavDropdown.Item href="#about/rico">
                  Who's Rico
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#about/contact">
                  Contact us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
            variant="outline-success"
            >
            Call Us!</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
