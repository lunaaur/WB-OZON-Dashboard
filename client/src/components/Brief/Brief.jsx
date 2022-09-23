import React, { useMemo, useState } from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import { Index } from '../Tables/index';
import { useForm } from "react-hook-form";
// import { Routes, Route } from 'react-router-dom;'
// import { getApiOzWb } from '../../pages/main/API/endPointApi';
// import { getApiOzWb } from '../Tables/index';
import {mainFunction, returnsFunction, ordersFunction} from '../../../src/helpers/apiWB'
import { ozonSalesFunction, ozonOrdersFunction, ozonRefundsFunction } from '../../helpers/apiOZ';

import axios from 'axios';
import { getDataTimeTerm } from '../../pages/main/helpers/getDate';
import { useDispatch, useSelector } from 'react-redux';
import { bigDataWb, revenue90Doz, returns90Doz, orderedUnits90Doz, ReadDate } from '../../store/action'
import { useEffect } from 'react';
import { Watch } from 'react-loader-spinner'

import styles from '../styles.css'

const Brief = () => {

  const [isAllLoad, setAllLoad] = useState(false)

  const [isLoadSal, setLoadSal] = useState(false);
  const [isLoadOrd, setLoadOrd] = useState(false)
  const [isLoadRef, setLoadRef] = useState(false)
  const [isLoadLog, setLoadLog] = useState(false)

  const [inputs, setInputs] = useState({ date_from: "", date_to: "" })
  const dispatch = useDispatch()
  const bigWB = useSelector((store) => store.bigDataWB)
  const revenueOZ = useSelector((store) => store.revenue_OZ)
  const returnOZ = useSelector((store) => store.returns_OZ)
  const orderUnitsOZ = useSelector((store) => store.ordered_OZ)


  async function getBgWB() {
    console.log("27")
    console.log(revenueOZ, '<=== revenueOZ')
    console.log(orderUnitsOZ, '<=== orderUnitsOZ')
    const dateFromTo = getDataTimeTerm('lastWeek')
    //const dateFromTo = getDataTimeTerm('90Days')
    dispatch(ReadDate(dateFromTo))
    if (!revenueOZ.length) {
      try {
        let resDays90Oz = await axios.post(
          "https://api-seller.ozon.ru/v1/analytics/data",
          {
            date_from: dateFromTo.date_from,
            date_to: dateFromTo.date_to,
            metrics: ["revenue"],
            dimension: ["day"],
            filters: [],
            limit: 1000,
            offset: 0,
          },
          {
            headers: {
              "Client-Id": "108699",
              "Api-Key": "9fc423f8-7aed-4237-a28b-e4fdcc172414",
              "Content-Type": "application/json",
            },
          }
        );
        console.log("61", resDays90Oz.data.result.data);
        dispatch(revenue90Doz(resDays90Oz.data.result.data))
      } catch (error) {
        console.log("esDays90Oz", error.message, error.status)
    alert("Слишком много обращений к API OZON")
      }

    }

    if (!returnOZ.length) {
      try {
        
      
      let resreturnsDays90Oz = await axios.post(
        "https://api-seller.ozon.ru/v1/analytics/data",
        {
          date_from: dateFromTo.date_from,
          date_to: dateFromTo.date_to,
          metrics: ["returns"],
          dimension: ["day"],
          filters: [],
          limit: 1000,
          offset: 0,
        },
        {
          headers: {
            "Client-Id": "108699",
            "Api-Key": "9fc423f8-7aed-4237-a28b-e4fdcc172414",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("85", resreturnsDays90Oz.data.result.data);
      dispatch(returns90Doz(resreturnsDays90Oz.data.result.data))
    } catch (error) {
      console.log("resreturnsDays90Oz", error.message, error.status)
    alert("Слишком много обращений к API OZON returns")
    }
    }

    if (orderUnitsOZ.length) {
      try {
      let resOrderedUnitsDays90Oz = await axios.post(
        "https://api-seller.ozon.ru/v1/analytics/data",
        {
          date_from: dateFromTo.date_from,
          date_to: dateFromTo.date_to,
          metrics: ["ordered_units"],
          dimension: ["day"],
          filters: [],
          limit: 1000,
          offset: 0,
        },
        {
          headers: {
            "Client-Id": "108699",
            "Api-Key": "9fc423f8-7aed-4237-a28b-e4fdcc172414",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("105", resOrderedUnitsDays90Oz.data.result.data);
      dispatch(orderedUnits90Doz(resOrderedUnitsDays90Oz.data.result.data))
    } catch (error) {
      console.log("resOrderedUnitsDays90Oz", error.message, error.status)
   alert("Слишком много обращений к API OZON Ordered-Units")
    }
    }

    if (!bigWB.length) {
      try {
        let resBigDwb = await axios.post('http://localhost:3001/getapi/bgwb', dateFromTo).catch(function (error) {
          console.log(error.toJSON());
        });;
      console.log("resBigDwb=>>>", resBigDwb.status, resBigDwb );
      console.log("true")
      dispatch(bigDataWb(resBigDwb.data.data))
      } catch (error) {
        console.log("error", error );  
        alert("Слишком много обращений к API WB")
      }
      
    }

    console.log("32")
  }
  useEffect(() => {
    getBgWB()
  }, [])

  function filtrDate(bigDataWB, dateFromTo) {
    const from = Date.parse(dateFromTo.date_from)
    const to = Date.parse(dateFromTo.date_to)
    const resArr = []

    bigDataWB.forEach(element => {
      if (from < Date.parse(element.rr_dt) && Date.parse(element.rr_dt) < to) {
        resArr.push(element)
  
      }
    })
    return resArr.sort((prev, next) => Date.parse(prev.rr_dt) - Date.parse(next.rr_dt));
  }

  const getApiOzWb = async (e, inputs) => {

    const dataTerm = e.target.getAttribute("data-time")
    const dataId = inputs
    const ax = getDataTimeTerm(dataTerm, inputs)

    const sale = async () => {
      const object = filtrDate(bigWB, ax)
      console.log(ax, 'ax')  
    //  const objectOz = filtrDate(revenueOZ)
      console.log(object, 'formatedOBJECT')
      setLoadSal(true)
      try {

      /*  const resSalesOz = await axios.post('http://localhost:3001/getapi/ozsal', {
          date_from: "2022-08-01"
        });
        const resSalesRefWb = await axios.post('http://localhost:3001/getapi/wbsal', ax);
       console.log("Ozon1--->", resSalesOz.data)
        console.log("WB1----->", resSalesRefWb.data)*/
        mainFunction(object, ax)
        ozonSalesFunction(revenueOZ, ax)
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
        const object = filtrDate(bigWB, ax)
        ordersFunction(object, ax)
        ozonOrdersFunction(orderUnitsOZ, ax)
       /* const resOrderOz = await axios.post('http://localhost:3001/getapi/ozord', {
          date_from: "2022-08-01"
        });
        const resOrderWb = await axios.post('http://localhost:3001/getapi/wbord', ax);*/
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
        const object = filtrDate(bigWB, ax)
        returnsFunction(object, ax)
        ozonRefundsFunction(returnOZ, ax)
       /*const resRefOz = await axios.post('http://localhost:3001/getapi/ozref', {
          date_from: "2022-08-01",
          date_to: "2022-09-01",
        });
        const resRefWb = await axios.post('http://localhost:3001/getapi/wbref', ax);*/
      } catch (error) {
        console.log(error)
      } finally {
        setLoadRef(false)
      }
    }
    ref()

    /*const log = async () => {
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
    log()*/
    console.log("AX----->", ax)
  }

  const formHendler = (e) => {
    e.preventDefault()

    if (inputs.date_from && inputs.date_to) {
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
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="yesterday" onClick={getApiOzWb}>Вчера</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="week" onClick={getApiOzWb}>Эта неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="lastWeek" onClick={getApiOzWb}>Прошлая неделя</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="month" onClick={getApiOzWb}>Этот месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="lastMonth" onClick={getApiOzWb}>Прошлый месяц</Button>
            <Button variant="outline-secondary" className="border border-secondary rounded" size="sm" data-time="90Days" onClick={getApiOzWb}>90 дней</Button>

            <Form onSubmit={formHendler} data-time="form" name="form" className="border border-secondary rounded" id="btn1">
              <div className="input-group col-xs-3">
                <input type="date" className="form-control" name="dateFrom" value={inputs.from} onChange={formHendler} style={{ border: "none" }} />
                <input type="date" className="form-control" name="dateTo" value={inputs.to} onChange={formHendler} style={{ border: "none" }} />
                <div className="input-group-prepend" id="choose">
                  <Button type="submit" id="sbm" className="border border-secondary rounded" variant="secondary" size="lg">
                    Выбрать
                  </Button>
                </div>
              </div>
            </Form>
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
            <NavDropdown title="Все ключи API" id="basic-nav-dropdown" className="border border-secondary rounded 2">
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
      {
        (isAllLoad)? 
        <Watch/>
   :
        <Index
        isLoadSal={isLoadSal}
        isLoadOrd={isLoadOrd}
        isLoadRef={isLoadRef}
        isLoadLog={isLoadLog} />
      }  
      
    </>
  )
}

export default Brief;