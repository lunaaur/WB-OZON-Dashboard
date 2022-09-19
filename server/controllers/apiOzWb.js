const axios = require('axios').default;
require('dotenv').config();

const testObj = {
    "result": {
      "data": [
        {
          "dimensions": [
            {
              "id": "2022-08-01",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-02",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-03",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-04",
              "name": ""
            }
          ],
          "metrics": [
            3000
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-05",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-06",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-07",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-08",
              "name": ""
            }
          ],
          "metrics": [
            870
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-09",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-10",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-11",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-12",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-13",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-14",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-15",
              "name": ""
            }
          ],
          "metrics": [
            1935
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-16",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-17",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-18",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-19",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-20",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-21",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-22",
              "name": ""
            }
          ],
          "metrics": [
            560
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-23",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-24",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-25",
              "name": ""
            }
          ],
          "metrics": [
            1500
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-26",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-27",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-28",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-29",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-30",
              "name": ""
            }
          ],
          "metrics": [
            1120
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-08-31",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        },
        {
          "dimensions": [
            {
              "id": "2022-09-01",
              "name": ""
            }
          ],
          "metrics": [
            0
          ]
        }
      ],
      "totals": [
        8985
      ]
    },
    "timestamp": "2022-09-15 12:45:43"
  }

exports.apiSalesOz = (req, res) => {
    // const ozon = await axios.post('', req.body);
    // console.log("Oz1------>",req.body)
    res.json(testObj)
}
exports.apiOrderOz = (req, res) => {
    // const ozon = await axios.post('', req.body);
    // console.log("Oz2------>",req.body)
    res.json(testObj)
}
exports.apiRefOz = (req, res) => {
    // const ozon = await axios.post('', req.body);
    // console.log("Oz3------>",req.body)
    res.json(testObj)
}
exports.apiLogOz = (req, res) => {
    // const ozon = await axios.post('', req.body);
    // console.log("Oz4------>",req.body)
    res.json(testObj)
}


exports.apiSalesRefWb = async (req, res) => {
    try {
        console.log("Wb1------>",req.body)
         const wb = await axios.get(`https://suppliers-stats.wildberries.ru/api/v1/supplier/sales?dateFrom=${req.body.date_from}&key=${process.env.KEY_API_WB}`, {withCredentials: false });
        console.log('WB------>',wb.data)
         res.json({data: wb.data}) 
    } catch (error) {
        console.log("this is error1---->",error.message)
    }
}
exports.apiOrderWb = async (req, res) => {
    try {
        console.log("Wb2------>",req.body)
        const wb = await axios.get(`https://suppliers-stats.wildberries.ru/api/v1/supplier/orders?dateFrom=${req.body.date_from}&key=${process.env.KEY_API_WB}`, {withCredentials: false });
        res.json({data: wb.data})
    } catch (error) {
        console.log("this is error2---->",error.message)
    }
}
exports.apiRefWb = async (req, res) => {
    // const wb = await axios.get('', req.body);
    console.log("Wb3------>",req.body)
    res.json(testObj)
}
exports.apiLogWb = (req, res) => {
    // const wb = await axios.get('', req.body);
    console.log("Wb4------>",req.body)
    res.json(testObj)
}