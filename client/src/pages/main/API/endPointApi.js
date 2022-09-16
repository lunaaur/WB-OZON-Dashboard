import axios from 'axios';
import {getDataTimeTerm} from '../helpers/getDate';

export const getApiOzWb = async(e) => {
    const dataTerm = e.target.getAttribute("data-time")
    console.log("five----->",dataTerm)
    getDataTimeTerm(dataTerm)
    // await axios.post('http://localhost3100/getapi/oz')
}