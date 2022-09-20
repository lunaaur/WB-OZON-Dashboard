import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbOrd } from '../../Chart/DataWE';
import { DataOzonOrd } from '../../Chart/DataOz';

export const OrderTab = () => {
    const [userData, setUserData] = useState({
        labels: DataWbOrd.map((data) => data.year1),
        datasets: [
          {
            label: "Users Gained",
            data: DataWbOrd.map((data) => data.userGain),
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
            yMin: 5000,
            yMax: 4000,
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

          <Table striped bordered hover style={{maxWidth:'40%'}}>
         <thead>
        <tr>
            <th></th>
            <th>Заказы</th>
          <th>Незавершенные</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cумма</td>
          <td></td>
          <td>↑ 6 000 000 P</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>↑ 4 050 P</td>
        </tr>
        <tr>
          <td>Количество</td>
          <td></td>
          <td>800 шт</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>+290 шт</td>
        </tr>
      </tbody>
          </Table>
          </>
  )
};


