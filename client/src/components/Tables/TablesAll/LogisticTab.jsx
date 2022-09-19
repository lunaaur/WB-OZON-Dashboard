import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbLog } from '../../Chart/DataWE';
import { DataOzonLog } from '../../Chart/DataOz';

const LogisticTab = () => {
    const [userData, setUserData] = useState({
        labels: DataWbLog.map((data) => data.year1),
        datasets: [
          {
            label: "Users Gained",
            data: DataWbLog.map((data) => data.userGain),
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
            data: DataOzonLog.map((data) => data.userGain),
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
            yMax: 40000,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
          line2: {
            type: 'line',
            yMin: 50000,
            yMax: 600,
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
              <th>Логистика</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>К клиенту</td>
              <td>↑ 178 500 P</td>
            </tr>
            <tr>
              <td></td>
              <td>↑ 31 450 P</td>
            </tr>
            <tr>
              <td>От клиента</td>
              <td>800 р</td>
            </tr>
            <tr>
              <td></td>
              <td>+290 р</td>
            </tr>
          </tbody>
              </Table>
      </>
  )
};

export default LogisticTab

