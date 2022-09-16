import React from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup} from 'react-bootstrap';
import Tables from '../Tables/Tables';
// import { Routes, Route } from 'react-router-dom;'
import {dateTime} from '../../pages/main/helpers/getDate'

const Brief = () => {
  return (
    <>
    <Navbar bg="light" expand="sm" className="d-flex flex-row justify-content-around text-center">
        <Navbar.Brand>Сводка</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-secondary" className="border border-secondary rounded text-dark bg-light" size="sm" onClick={()=>dateTime('yesterday')}>Вчера</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('week')}>Неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('last week')}>Прошлая неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('month')}>Месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('30 days')}>30 дней</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('last month')}>Прошлый месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" onClick={()=>dateTime('90 days')}>90 дней</Button>
            

{/* <Form className="border border-secondary rounded">
  <div className="input-group col-xs-3">
    <input type="date" className="form-control" style={{border: "none"}}/>
    <input type="date" className="form-control" style={{border: "none"}}/>
    <div className="input-group-prepend">
      <button className="input-group-text">Выбрать</button>
    </div>
  </div>
</Form> */}
<InputGroup className="border border-secondary rounded" style={{maxWidth: "30%"}}>
      <Form.Control type="date"/>
      <Form.Control type="date"/>
      <Button variant="secondary">Выбрать</Button>
    </InputGroup>

            <NavDropdown title="Опции" id="basic-nav-dropdown" className="border border-secondary rounded">
              <NavDropdown.Item href="#action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Все ключи API" id="basic-nav-dropdown" className="border border-secondary rounded">
              <NavDropdown.Item href="#action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Tables/>
    </>
  )
}

export default Brief;