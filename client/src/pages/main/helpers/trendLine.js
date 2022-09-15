import axios from "axios";

let csvUrl = 'https://cdn1.ozone.ru/s3/item-picture-14/3d/6f/3d6fc365b3abd6ad14dedd1ae2abffb1.csv'

async function parseCsv (csv) {
const res = await axios.get(csv)
console.log(res.data)
}

export {parseCsv}