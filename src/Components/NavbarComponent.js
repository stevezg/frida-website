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
              <Nav.Link href="#home">Menu</Nav.Link>
              <Nav.Link href="#link">Location</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hours</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" />
                <NavDropdown.Item href="#action/3.3">
                  Who's Rico
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button variant="outline-success">Menu</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
