import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbRefб, returnsArray } from '../../Chart/DataWE';
import { DataOzonRef } from '../../Chart/DataOz';
import s from "./table.module.css";

export const RefTab = () => {

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
const WB = lineTrend(returnsArray, "quantity")

    const [userData, setUserData] = useState({
        labels: returnsArray.map((data) => data.date),
        datasets: [
          {
            label: "Data WB",
            data: returnsArray.map((data) => data.quantity),
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
            label: "Data OZ",
            data: DataOzonRef.map((data) => data.userGain),
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
            yMin: 50000,
            yMax: 56470,
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
              <th>Прибыль и коммисия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>WB</td>
              <td>{returnsArray.reduce((acc, val)=> {
            return acc + val.quantity

          }, 0)}</td>
            </tr>
            <tr>
              <td></td>
              <td>↑ 400050 P</td>
            </tr>
          </tbody>
              </Table>
              </>
  )
};


