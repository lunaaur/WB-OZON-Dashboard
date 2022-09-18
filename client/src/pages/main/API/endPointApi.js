import axios from 'axios';
import {getDataTimeTerm} from '../helpers/getDate';

export const getApiOzWb = async(e, inputs) => {
    const dataTerm = e.target.getAttribute("data-time")
    const dataId = inputs
    const ax = getDataTimeTerm(dataTerm, inputs )
    console.log('ax: ', ax);

    // await axios.post('http://localhost3100/getapi/oz', ax)
}