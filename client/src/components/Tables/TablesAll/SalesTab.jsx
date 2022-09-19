import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbSal } from '../../Chart/DataWE';
import { DataOzonSal } from '../../Chart/DataOz';

 const SalesTab = () => {
    const [userData, setUserData] = useState({
        labels: DataWbSal.map((data) => data.year1),
        datasets: [
          {
            label: "Users Gained",
            data: DataWbSal.map((data) => data.userGain),
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
            label: "Users Gained",
            data: DataOzonSal.map((data) => data.userGain),
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
            yMin: 400,
            yMax: 40000,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
          line2: {
            type: 'line',
            yMin: 50000,
            yMax: 60000,
            borderColor: 'rgb(30, 144, 255)',
            borderWidth: 2,
          }
        }
      }
    }
  }}/>
            </div>

            <Table striped bordered hover style={{maxWidth:'40%'}}>
         <thead>
        <tr>
            <th></th>
          <th>Продажи</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cумма</td>
          <td>↑ 20000000 P</td>
        </tr>
        <tr>
          <td></td>
          <td>↑ 400050 P</td>
        </tr>
        <tr>
          <td>Количество</td>
          <td>800 шт</td>
        </tr>
        <tr>
          <td></td>
          <td>+290 шт</td>
        </tr>
      </tbody>
            </Table>
            </>
  )
};

export default SalesTab
