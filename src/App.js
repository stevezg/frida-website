import React from 'react'
import './App.css'
import {
  Navbar,
  Nav,
  NavDropdown,
  Button
} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import Routes from "./Routes";


function App() {
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/"><Navbar.Brand href="/">Frida</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link></LinkContainer>
              <Nav.Link href="/location"
              >Location</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <LinkContainer to="/hours"><NavDropdown.Item>Hours</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/rico"><NavDropdown.Item>
                  Who's Rico
                </NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="contact">
                <NavDropdown.Item>
                  Contact us
                </NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
            <Button
            variant="outline-success"
            >
            <a className="call_us" href="tel:(970) 963-0579">Call Us!</a></Button>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>

        {/* <Header />
        <Menu />
        <Hours />
        <Location />
        <PhoneNumber /> */}

      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
