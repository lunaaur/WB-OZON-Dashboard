import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { ordersArray } from '../../Chart/DataWE';
import { DataOzonOrd } from '../../Chart/DataOz';
import s from "./table.module.css";

export const OrderTab = () => {
    const [userData, setUserData] = useState({
        labels: ordersArray.map((data) => data.date),
        datasets: [
          {
            label: "Данные Wildberries",
            data: ordersArray.map((data) => data.quantity),
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 2,
          },{
            label: "Данные Ozon",
            data: DataOzonOrd.map((data) => data.userGain),
            backgroundColor: [
              "red"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      },
      );

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
      
          // console.log(index, summaX);
        })
        let SquereSummaX = summaX ** 2 // шаг 8
        let topA = n * summaXY - summaX * summaY // шаг 9
        let downA = n * summaXSquere - SquereSummaX
        let resultA = topA / downA
        let topB = summaY - resultA * summaX
        let resultB = topB / n
       return {yMin:resultA, yMax:resultB}
      }

  const WB = lineTrend(ordersArray, "quantity")
  console.log("WB----->", WB)

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
            yMin: 70000,
            yMax: 6000,
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
            <th>Заказы</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wildberries</td>
          
          <td>{ordersArray.reduce((acc, val)=> {
            return acc + val.quantity

          }, 0)}</td>
        </tr>
        <tr>
          <td>Ozon</td>
          
          <td>↑ 4 050 P</td>
        </tr>
        
      </tbody>
          </Table>
          </>
  )
};


