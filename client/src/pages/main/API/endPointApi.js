import axios from 'axios';
import {getDataTimeTerm} from '../helpers/getDate';


// {
//     "date_from": "2022-08-01",
//       "date_to": "2022-09-01",
//     }

export const getApiOzWb = async(e, inputs) => {
        const dataTerm = e.target.getAttribute("data-time")
        const dataId = inputs
        const ax = getDataTimeTerm(dataTerm, inputs )
    const resSalesOz = await axios.post('http://localhost:3001/getapi/ozsal', {
            date_from: "2022-08-01"
            });
    const resOrderOz = await axios.post('http://localhost:3001/getapi/ozord', {
            date_from: "2022-08-01"
            });
    const resRefOz = await axios.post('http://localhost:3001/getapi/ozref', {
            date_from: "2022-08-01",
            date_to: "2022-09-01",
            });
    const resLogOz = await axios.post('http://localhost:3001/getapi/ozlog', {
            date_from: "2022-08-01",
            date_to: "2022-09-01",
            });


    const resSalesRefWb = await axios.post('http://localhost:3001/getapi/wbsal', ax);
    const resOrderWb = await axios.post('http://localhost:3001/getapi/wbord', ax);
    const resRefWb = await axios.post('http://localhost:3001/getapi/wbref', {
            date_from: "2022-08-01",
            date_to: "2022-09-01",
            });
    const resLogWb = await axios.post('http://localhost:3001/getapi/wblog', {
            date_from: "2022-08-01",
            date_to: "2022-09-01",
            });
            
//    console.log("Ozon1--->",resSalesOz.data)
//    console.log("Ozon2--->",resOrderOz.data)
//    console.log("Ozon3--->",resRefOz.data)
//    console.log("Ozon4--->",resLogOz.data)

   console.log("WB1----->",resSalesRefWb.data)
   console.log("AX----->",ax)
   console.log("WB2----->",resOrderWb.data)
//    console.log("WB3----->",resRefWb.data)
//    console.log("WB4----->",resLogWb.data)
    }