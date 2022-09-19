import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbRef } from '../../Chart/DataWE';
import { DataOzonRef } from '../../Chart/DataOz';

const RefTab = () => {
    const [userData, setUserData] = useState({
        labels: DataWbRef.map((data) => data.year1),
        datasets: [
          {
            label: "Users Gained",
            data: DataWbRef.map((data) => data.userGain),
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
            yMin: 4000,
            yMax: 48670,
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
              <Table striped bordered hover style={{maxWidth:'40%'}}>
             <thead>
            <tr>
                <th></th>
              <th>Прибыль и коммисия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Прибыль</td>
              <td>↑ 20000000 P</td>
            </tr>
            <tr>
              <td></td>
              <td>↑ 400050 P</td>
            </tr>
            <tr>
              <td>Комиссия</td>
              <td>- 116 780р</td>
            </tr>
            <tr>
              <td></td>
              <td>- 87 000р</td>
            </tr>
          </tbody>
              </Table>
              </>
  )
};

export default RefTab

