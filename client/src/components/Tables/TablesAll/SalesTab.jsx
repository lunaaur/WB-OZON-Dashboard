import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbSal, salesArray, ordersArray } from '../../Chart/DataWE';
import { DataOzonSal, salesOz } from '../../Chart/DataOz';
import { useSelector } from 'react-redux';
import { mainFunction } from "./func"
import s from "./table.module.css";

export const SalesTab = () => {
const [Wbline, setWbLine] = useState ({
  yMin: 1000,
  yMax: 10
})

const [sumSales, setSumSelaes] = useState (0) 



  const tableData = useSelector(state => state.bigDataWB);
  console.log("даннные из строра", tableData)

  // const [data, setData] = useState(false);
  let newFilterArr
  useEffect(() => {
    if (tableData?.data?.length) {

      newFilterArr = mainFunction(tableData, { date_from: "2022-09-12", date_to: "2022-09-18" })
      const nfa = newFilterArr.flat()
      const line = lineTrend(nfa, "retail_amount")
      console.log('line: ', line);

      setWbLine(line)
      setSumSelaes(nfa.reduce((acc, val) => {
        return acc + val.retail_amount
    
      }, 0))
      setUserData({
        labels: nfa.map((data) => data.date),
        datasets: [
          {
            label: "Данные Wildberries",
            data: nfa.map((data) => data.retail_amount),
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 2,
          }, {
            label: "Данные Ozon",
            data: salesOz.map((data) => data.totalPrice),
            backgroundColor: [
              "red"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      })
    }
  }, [tableData])


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
    return { yMin: resultA, yMax: resultB }
  }


  const OZ = lineTrend(salesOz, "totalPrice")


  const [userData, setUserData] = useState({
    labels: salesArray.map((data) => data.date),
    datasets: [
      {
        label: "Данные Wildberries",
        data: salesArray.map((data) => data.retail_amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      }, {
        label: "Данные Ozon",
        data: salesOz.map((data) => data.totalPrice),
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
        <LineChart chartData={userData} WB={Wbline} options={{
          plugins: {
            autocolors: false,
            annotation: {
              annotations: {
                line1: {
                  type: 'line',
                  yMin: Wbline.yMin,
                  yMax: Wbline.yMax,
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
        }} />
      </div>

      <Table sumSales={sumSales} striped bordered hover className={s.table} style={{ maxWidth: '80%' }}>
        <thead>
          <tr>
            <th></th>
            <th>Продажи</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wildberries</td>
            <td>{salesArray.reduce((acc, val) => {
              return acc + val.retail_amount
            }, 0)} p</td>
          </tr>
          <tr>
            <td>Ozon</td>
            <td>{salesOz.reduce((acc, val) => {
              return acc + val.totalPrice

            }, 0)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

