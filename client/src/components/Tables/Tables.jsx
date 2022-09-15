import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../Chart/LineChart';
import { DataWebrs } from '../Chart/DataWE';
import { DataOzon } from '../Chart/DataOz';

// import { Line } from "react-chartjs-2";



const Tables = () => {
    
    const [userData, setUserData] = useState({
        labels: DataWebrs.map((data) => data.year1),
        datasets: [
          {
            label: "Users Gained",
            data: DataWebrs.map((data) => data.userGain),
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
            data: DataOzon.map((data) => data.userGain),
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
    <div className="container">
      <div className="row justify-content-around text-center">
        <div className="col-6">
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
        </div>

        <div className="col-6">
          <div style={{ width: '70%' }}>
          <LineChart chartData={userData} options={{
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 40000,
            yMax: 40,
            borderColor: 'rgb(255, 99, 132)',
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
        </div>
      </div>

      <div className="row justify-content-around text-center">
          <div className="col-6">
              <div style={{ width: '70%' }}>
              <LineChart chartData={userData} />
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
          </div>
          <div className="col-6">
            <div style={{ width: '70%' }}>
              <LineChart chartData={userData} />
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
          </div>
      </div>
    </div>
    </>
  )
}

export default Tables
