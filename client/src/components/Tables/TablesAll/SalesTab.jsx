import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import LineChart from '../../Chart/LineChart';
import { DataWbSal, salesArray, ordersArray} from '../../Chart/DataWE';
import { DataOzonSal, salesOz } from '../../Chart/DataOz';
import {useSelector} from 'react-redux';
import {mainFunction} from "./func"
import s from "./table.module.css";

export const SalesTab = () => {

  const tableData = useSelector(state => state.bigDataWB);
  console.log("даннные из строра", tableData)

  // const [data, setData] = useState(false);

  let filter = useEffect(()=>{
    if(tableData.length > 0){
     const filterSale = mainFunction(tableData, {date_from: "2022-09-12", date_to: "2022-09-18"})
     return filterSale
  } 
}, [tableData])

// const filter = async() => {
//   const filterSale = await mainFunction(tableData, {date_from: "2022-09-12", date_to: "2022-09-18"})
//      return filterSale
// }

console.log('filter Sale ------->', filter)
  
  // if(tableData.length > 0){
  //   const filterSale = mainFunction(tableData, {date_from: "2022-09-12", date_to: "2022-09-18"})
  //   console.log('filter Sale ------->', filterSale)
  //   console.log('length store----->', tableData.length)
  // }

  // let arrOne = [
  //   {
  //     date: '2022-09-19T09:16:09',
  //     lastChangeDate: '2022-09-19T09:17:29',
  //     supplierArticle: '019-05',
  //     techSize: '0',
  //     barcode: '2018826348006',
  //     totalPrice: 600,
  //     discountPercent: 20,
  //     isSupply: false,
  //     isRealization: true,
  //     promoCodeDiscount: 0,
  //     warehouseName: 'Электросталь',
  //     countryName: 'Россия',
  //     oblastOkrugName: 'Дальневосточный федеральный округ',
  //     regionName: 'Саха /Якутия/',
  //     incomeID: 8358031,
  //     saleID: 'S3398181450',
  //     odid: 600473279811,
  //     spp: 0,
  //     forPay: 432,
  //     finishedPrice: 433,
  //     priceWithDisc: 480,
  //     nmId: 59847130,
  //     subject: 'Жидкости для уборки',
  //     category: 'Хозяйственные товары',
  //     brand: 'PROSEPT',
  //     IsStorno: 0,
  //     gNumber: '1592334054021265280',
  //     sticker: '',
  //     srid: '86b8ee4cf2ea49d390cf13da5176f670'
  //   },
  //   {
  //     date: '2022-09-19T10:12:27',
  //     lastChangeDate: '2022-09-19T10:12:59',
  //     supplierArticle: 'ББ1бб1',
  //     techSize: '0',
  //     barcode: '2033914218627',
  //     totalPrice: 5500,
  //     discountPercent: 35,
  //     isSupply: false,
  //     isRealization: true,
  //     promoCodeDiscount: 0,
  //     warehouseName: 'Санкт-Петербург',
  //     countryName: 'Россия',
  //     oblastOkrugName: 'Центральный федеральный округ',
  //     regionName: 'Московская',
  //     incomeID: 7666129,
  //     saleID: 'S3398410574',
  //     odid: 600512834239,
  //     spp: 0,
  //     forPay: 3146,
  //     finishedPrice: 3147,
  //     priceWithDisc: 3575,
  //     nmId: 86264589,
  //     subject: 'Полотенца банные',
  //     category: 'Дом',
  //     brand: '',
  //     IsStorno: 0,
  //     gNumber: '98388789031426553374',
  //     sticker: '',
  //     srid: '0038b079a48b45f8b0842519a18015e8'
  //   }
  // ]

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
const WB = lineTrend(salesArray, "retail_amount")
const OZ = lineTrend(salesOz, "totalPrice")

    const [userData, setUserData] = useState({
        labels: salesArray.map((data) => data.date),
        datasets: [
          {
            label: "dataWB",
            data: salesArray.map((data) => data.retail_amount),
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
          <th>Продажи</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>WB</td>
          <td>{salesArray.reduce((acc, val)=> {
            return acc + val.retail_amount

          }, 0)}</td>
        </tr>
        <tr>
          <td>OZ</td>
          <td>{salesOz.reduce((acc, val)=> {
            return acc + val.totalPrice

          }, 0)}</td>
        </tr>
        
      </tbody>
            </Table>
            </>
  )
};

