import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbLog } from '../../Chart/DataWE';
import { logisticOz } from '../../Chart/DataOz';
import s from "./table.module.css";
import {salesArray} from '../../Chart/DataWE'

export const LogisticTab = () => {

  function lineTrend(arr, poleSort) {
    const n = arr.length // шаг 1
    let summaX = 0
    let summaY = 0
    let summaXY = 0
    let summaXSquere = 0
  
    arr.map((el, index) => {
      let x = index
      let y = el[poleSort]
      summaX = summaX + index // шаг 4
      summaY = summaY + y     // шаг 5
      let XY = x * y          // шаг 2
      summaXY = summaXY + XY // шаг 3
      const xSquere = x ** 2 // шаг 6
      summaXSquere = summaXSquere + xSquere // шаг 7
    })
    let SquereSummaX = summaX ** 2 // шаг 8
    let topA = n * summaXY - summaX * summaY // шаг 9
    let downA = n * summaXSquere - SquereSummaX
    let resultA = topA / downA
    let topB = summaY - resultA * summaX
    let resultB = topB / n
   return {yMin:resultA, yMax:resultB}
  }

  // console.log('trendLine------>',lineTrend(arrOne, "totalPrice"))
const WB = lineTrend(salesArray, "delivery_rub")
const OZ = lineTrend(logisticOz, "userGain")


    const [userData, setUserData] = useState({
        labels: salesArray.map((data) => data.date),
        datasets: [
          {
            label: "Данные Wildberries",
            data: salesArray.map((data) => data.delivery_rub),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },{
            label: "Данные Ozon",
            data: logisticOz.map((data) => data.userGain),
            backgroundColor: [
              "red"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      },
      );

  return (
    <>
    <div style={{ width: '70%' }}>
              <LineChart chartData={userData} options={{
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: WB.yMin,
            yMax: WB.yMax,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
          line2: {
            type: 'line',
            yMin: OZ.yMin,
            yMax: OZ.yMax,
            borderColor: 'rgb(30, 144, 255)',
            borderWidth: 2,
          }
        }
      }
    }
  }}/>
              </div>
              <Table striped bordered hover className={s.table} style={{maxWidth:'80%'}}>
             <thead>
            <tr>
                <th></th>
              <th>Логистика</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wildberries</td>
              <td>{salesArray.reduce((acc, val)=> {
            return acc + val.delivery_rub

          }, 0)} P</td>
            </tr>
            <tr>
              <td>Ozon</td>
              <td>{logisticOz.reduce((acc, val)=> {
            return acc + val.userGain

          }, 0)} P</td>
            </tr>
          </tbody>
              </Table>
      </>
  )
};



