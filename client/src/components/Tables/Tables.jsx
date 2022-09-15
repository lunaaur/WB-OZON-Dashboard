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
      }
      );

  return (
    <>
    <div className="row d-flex flex-row justify-content-around text-center">
    <div style={{ width: '30%' }}>
    <LineChart chartData={userData} />
    </div>

    <div style={{ width: '30%' }}>
    <LineChart chartData={userData} />
    </div>

    <Table striped bordered hover style={{maxWidth:'15%'}}>
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

        
        <Table striped bordered hover style={{maxWidth:'15%'}}>
         <thead>
        <tr>
            <th>Заказы</th>
          <th>Незавершенные</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cумма</td>
          <td>↑ 6 000 000 P</td>
        </tr>
        <tr>
          <td></td>
          <td>↑ 4 050 P</td>
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


        <div className="row d-flex flex-row justify-content-around text-center">
        <div style={{ width: '30%' }}>
    <LineChart chartData={userData} />
    </div>

    <div style={{ width: '30%' }}>
    <LineChart chartData={userData} />
    </div>
        <Table striped bordered hover style={{maxWidth:'15%'}}>
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

            <Table striped bordered hover style={{maxWidth:'15%'}}>
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
            </>
  )
}

export default Tables
