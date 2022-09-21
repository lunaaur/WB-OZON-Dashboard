import React from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import { Index } from '../Tables/index';
import { useForm } from "react-hook-form";
// import { Routes, Route } from 'react-router-dom;'
// import { getApiOzWb } from '../../pages/main/API/endPointApi';
// import { getApiOzWb } from '../Tables/index';
import { useState } from 'react';
import axios from 'axios';
import { getDataTimeTerm } from '../../pages/main/helpers/getDate';
import { useDispatch, useSelector } from 'react-redux';
import { bigDataWb } from '../../store/action'
import { useEffect } from 'react';



const Brief = () => {
  const [isLoadSal, setLoadSal] = useState(false);
  const [isLoadOrd, setLoadOrd] = useState(false)
  const [isLoadRef, setLoadRef] = useState(false)
  const [isLoadLog, setLoadLog] = useState(false)

  const [inputs, setInputs] = useState({ dateFrom: "", dateTo: "" })
  const dispatch = useDispatch()

  async function getBgWB() {
    console.log("27")
    const dateFromTo = getDataTimeTerm('lastWeek')
    let resBigDwb = await axios.post('http://localhost:3001/getapi/bgwb', dateFromTo);
    console.log("test", resBigDwb.data);
    dispatch(bigDataWb(resBigDwb.data))
    console.log("32")
  }
  // useEffect(()=> {
  //   getBgWB()
  // }, [])

  const getApiOzWb = async (e, inputs) => {

    const dataTerm = e.target.getAttribute("data-time")
    const dataId = inputs
    const ax = getDataTimeTerm(dataTerm, inputs)

    const sale = async () => {
      setLoadSal(true)
      try {
        const resSalesOz = await axios.post('http://localhost:3001/getapi/ozsal', {
          date_from: "2022-08-01"
        });
        const resSalesRefWb = await axios.post('http://localhost:3001/getapi/wbsal', ax);
        console.log("Ozon1--->", resSalesOz.data)
        console.log("WB1----->", resSalesRefWb.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoadSal(false)
      }
    }
    sale()

    const order = async () => {
      setLoadOrd(true)
      try {
        const resOrderOz = await axios.post('http://localhost:3001/getapi/ozord', {
          date_from: "2022-08-01"
        });
        const resOrderWb = await axios.post('http://localhost:3001/getapi/wbord', ax);
      } catch (error) {
        console.log(error)
      } finally {
        setLoadOrd(false)
      }
    }
    order()

    const ref = async () => {
      setLoadRef(true)
      try {
        const resRefOz = await axios.post('http://localhost:3001/getapi/ozref', {
          date_from: "2022-08-01",
          date_to: "2022-09-01",
        });
        const resRefWb = await axios.post('http://localhost:3001/getapi/wbref', ax);
      } catch (error) {
        console.log(error)
      } finally {
        setLoadRef(false)
      }
    }
    ref()

    const log = async () => {
      setLoadLog(true)
      try {
        const resLogOz = await axios.post('http://localhost:3001/getapi/ozlog', {
          date_from: "2022-08-01",
          date_to: "2022-09-01",
        });
        const resLogWb = await axios.post('http://localhost:3001/getapi/wblog', ax);
      } catch (error) {
        console.log(error)
      } finally {
        setLoadLog(false)
      }
    }
    log()
    console.log("AX----->", ax)
  }

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
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="yesterday" onClick={getApiOzWb}>Вчера</Button>
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
                  <Button type="submit" className="border border-secondary rounded" variant="secondary" size="lg">
                    Выбрать
                  </Button>
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
      <Index
        isLoadSal={isLoadSal}
        isLoadOrd={isLoadOrd}
        isLoadRef={isLoadRef}
        isLoadLog={isLoadLog} />
    </>
  )
}

export default Brief;