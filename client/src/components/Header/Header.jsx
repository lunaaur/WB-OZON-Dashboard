import {Button, 
  Container, 
  Form, 
  Nav, 
  Navbar, 
  NavDropdown, 
  Offcanvas } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
        <Navbar bg="light" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavDropdown
                    title="Кабинет WB"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <Link to="/wildberries" style={{ textDecoration: 'none', color: "black" }}>Свобка WE</Link>
                    <NavDropdown.Item href="#action2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Сводка"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <Link to="/allbrief" style={{ textDecoration: 'none', color: "black" }}>Общая сводка</Link>
                    <NavDropdown.Item href="#action5">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Кабинет OZ"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <Link to="/ozon" style={{ textDecoration: 'none', color: "black" }}>Сводка OZ</Link>
                    <NavDropdown.Item href="#action8">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Поиск по товарам"
                    className="me-2"
                    aria-label="Search"
                    />
                  <Button variant="outline-primary">Поиск</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default Header;