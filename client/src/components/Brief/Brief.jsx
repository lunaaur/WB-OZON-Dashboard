import React from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import Tables from '../Tables/Tables';
import { useForm } from "react-hook-form";
// import { Routes, Route } from 'react-router-dom;'
import { getApiOzWb } from '../../pages/main/API/endPointApi';
import { useState } from 'react';

const Brief = () => {
  const [inputs, setInputs] = useState({ dateFrom: "", dateTo: "" })
  const formHendler = (e) => {
    e.preventDefault()
    if (inputs.dateFrom && inputs.dateTo) {
      console.log("res", inputs)
      getApiOzWb(e, inputs)
    }
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <Navbar bg="light" expand="sm" className="d-flex flex-row justify-content-around text-center">
        <Navbar.Brand>Сводка</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-secondary" className="border border-secondary rounded text-dark bg-light" size="sm" data-time="yesterday" onClick={getApiOzWb}>Вчера</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="week" onClick={getApiOzWb}>Эта неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="lastWeek" onClick={getApiOzWb}>Прошлая неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="month" onClick={getApiOzWb}>Этот месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="lastMonth" onClick={getApiOzWb}>Прошлый месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="90Days" onClick={getApiOzWb}>90 дней</Button>

            <Form onSubmit={formHendler} data-time="form" name="form" className="border border-secondary rounded">
              <div className="input-group col-xs-3">
                <input type="date" className="form-control" name="dateFrom" value={inputs.from} onChange={formHendler} style={{ border: "none" }} />
                <input type="date" className="form-control" name="dateTo" value={inputs.to} onChange={formHendler} style={{ border: "none" }} />
                <div className="input-group-prepend">
                  <Button type="submit" className="border border-secondary rounded" variant="secondary">Выбрать</Button>
                </div>
              </div>
            </Form>
            {/* <Form >
            <InputGroup  className="border border-secondary rounded" style={{ maxWidth: "100%" }}>
              <Form.Control type="date"  />
              <Form.Control type="date" onChange={formHendler}/>
              <Button type="submit" variant="secondary">Выбрать</Button>
            </InputGroup>
            </Form> */}
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
      <Tables />
    </>
  )
}

export default Brief;