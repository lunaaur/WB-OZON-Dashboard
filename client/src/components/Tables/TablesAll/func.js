export function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }

let range

export function findMissing (array, array2) {
  let result = [];
  let fullArray = []
  console.log(range)
  
  const res = array2.map((el, index) => {
    for (let i = range[index].date_from.day; i <= range[index].date_to.day; i++){
     // console.log(i, 'i')
     if (!el.includes(i)){
       result.push(i)
      // console.log(result, 'PROBLEM?')
       fullArray.push(result)
     return result
     }
      }
 //   console.log(el, 'EL')
    fullArray.push([])
  
    if (fullArray.length == array2.length){
      return fullArray
    }
   return fullArray
  })
 return fullArray
}

export function findMissing1 (array, array2) {
let result = [];

console.log(range, "LKJLH")

const res = array2.map((el, index) => {
for (let i = range[0].date_from.day; i <= range[0].date_to.day; i++){
 if (!el.includes(i)){
   result.push(i)
 }
  }
   return result
})
return result
}


export const reqBodyFormated = (reqBody) => {
  console.log(reqBody, 'reqBody')
  let month1 = reqBody.date_from.slice(5,7);
  month1 = Number(month1);
  
  let month2 = reqBody.date_to.slice(5,7);
  month2 = Number(month2);
  
  if (month1 === month2) {
  let rangeArray = []
  let differenceBetweenMonths = month2 - month1
  let year1 = reqBody.date_from.slice(0,4);
  year1 = Number(year1);
   let day1 = reqBody.date_from.slice(8,10);
  day1 = Number(day1);
  
   let year2 = reqBody.date_to.slice(0,4);
  year2 = Number(year2);
    let day2 = reqBody.date_to.slice(8,10);
  day2 = Number(day2);
  
  range = {
date_from: 
{
year: year1, month : month1, day: day1
},
date_to: {year: year2, month : month2, day: day2},
nMonths: differenceBetweenMonths
}

rangeArray.push(range)
return rangeArray

} else {

let year1 = reqBody.date_from.slice(0,4);
  year1 = Number(year1);
   let day1 = reqBody.date_from.slice(8,10);
  day1 = Number(day1);
  
   let year2 = reqBody.date_to.slice(0,4);
  year2 = Number(year2);
    let day2 = reqBody.date_to.slice(8,10);
  day2 = Number(day2);

let differenceBetweenMonths = month2 - month1
console.log(differenceBetweenMonths, 'differenceBetweenMonths')
if (differenceBetweenMonths >= 1) {   //* если диапазон больше одного месяца, то ищем кол дней в промежутке между ними

let rangeArray = []

for (let i = month1; i <= month2; i++){   //* ищем месяца которые находятся в промежутке
const days = daysInMonth(i, year1)
//console.log(i, 'months')

let length = rangeArray.length - 1
if (length == differenceBetweenMonths){
  return rangeArray
}

for (let j = 1; j <= days; j++) {
//  console.log(j, 'days')
  if (i == month1 && j == days) {
    range = {
      date_from: 
  {
  year: year1, month : i, day: day1
  },
  date_to: {year: year1, month : i, day: days},
  nMonths: differenceBetweenMonths,
  }
  rangeArray.push(range) 
  }
  if (j == day2 && i == month2) {
 //   console.log('the end')
    range = {
      date_from: 
{
year: year2, month : month2, day: 1
},
date_to: {year: year2, month : month2, day: day2},
nMonths: differenceBetweenMonths,
}
rangeArray.push(range)
return rangeArray
  }
  }
  if ( i !== month1) {
    range = {
          date_from: 
    {
    year: year1, month : i, day: 1
    },
    date_to: {year: year1, month : i, day: days},
    nMonths: differenceBetweenMonths,
    }
    rangeArray.push(range) 
    }
  }
return rangeArray

}
}
  }

export  const mainFunction = (obj, reqBody) => {
    range = reqBodyFormated(reqBody)
    obj = obj.data
const group = obj.reduce((r, a) => {
   r[a.doc_type_name] = [...r[a.doc_type_name] || [], a];
   return r;
  }, {});
  
  //console.log(group, 'group')
  
   let array = Object.values(group)
   //console.log(array, 'array')
  

    const sortedArray = array.map((el) => {
    el.sort((prev, next) => Date.parse(prev.rr_dt) - Date.parse(next.rr_dt)); 
      return el
    })
    
   //console.log(sortedArray, 'sortedArray')
    
    let newObj = sortedArray.map((el, index, array) => {
    const res = []
    el.map((e, index) => {
     let year = e.rr_dt.slice(0,4);
      year = Number(year);
      let month = e.rr_dt.slice(5,7);
      month = Number(month);
      let day = e.rr_dt.slice(8,10);
      day = Number(day);
      
      res.push({year: year, month: month, day: day, doc_type_name: e.doc_type_name, retail_amount: e.retail_amount, delivery_rub: e.delivery_rub});
    })
    return res
    });
    
 // console.log(newObj, 'newObj'); // массив с разбитой датой
  
  
  //* здесь мы выбираем только продажи
  let group1 = newObj[0].reduce((r, a) => {
 r[a.month] = [...r[a.month] || [], a];
 return r;
}, {});
  
let returnesArray = Object.values(group1)
//console.log(returnesArray, 'salesArray')   

let returnesArray2 = []

let array2 = returnesArray.map((el, index, array) => {
  let total1 = 0;
  let total2 = 0;
  let finalArray = []
  
    let group2 = el.reduce((r, a) => {
 r[a.day] = [...r[a.day] || [], a];  
 return r;
}, {});

let array2 = Object.values(group2)
//console.log(array2, 'array2')

  for (let elem of array2) {
    total1 = elem.reduce((acc, el) => el.retail_amount + acc, 0)
    total2 = elem.reduce((acc, el) => el.delivery_rub + acc, 0)
    finalArray.push({year:elem[0].year, month: elem[0].month, day: elem[0].day, retail_amount: total1, delivery_rub: total2})
  }
   returnesArray2.push(finalArray)   
  return returnesArray2
})

//console.log(returnesArray2, 'salesArray2')

const numberOfDays = returnesArray2.map((el, index) => {
  let arr = []
  console.log(el)
    for (let elem of el) {
     arr.push(Object.values(elem)[2])
}
return arr
})

let missingDays;

console.log(numberOfDays, 'numberOfDays!!!!!!!')
let FINALARRAY
if(range[0].nMonths >= 1 ){
  missingDays = findMissing(returnesArray2, numberOfDays)
  FINALARRAY = returnesArray2.map((el, index) => {
    let OBJ = {}
    let result = []
    if (!missingDays[index].includes(el[index].day)){
       console.log(missingDays[index], 'ITEM')
        if (missingDays[index].length !== 0) {
          console.log(missingDays[index], '11')
        OBJ = {year:el[index].year, month: el[index].month, day: missingDays[index], retail_amount: 0, delivery_rub: 0}
        result.push(OBJ)
        
      }
    }
    return result 
    //} 
   // }
  })
 } else {
  missingDays = findMissing1(returnesArray2, numberOfDays)
  FINALARRAY = returnesArray2.map((el, index) => {
    let OBJ = {}
    let result = []
    for (let elem of el) {
    if (!missingDays.includes(elem.day)){
      for (let item of missingDays){
     OBJ = {year:elem.year, month: elem.month, day: item, return_amount: 0, delivery_rub: 0}
    result.push(OBJ)
      }
    return result 
    }
    }
  })
  }
  console.log(missingDays, 'missingDays')
  //missingDays = findMissing(returnesArray2, numberOfDays)
  
 //console.log(FINALARRAY, 'FINALARRAY')
  const FINALARRAY2 = FINALARRAY.map((el, index, array) => {
    let res = array[index].concat(returnesArray2[index])
    res.sort((a, b) => a.day - b.day)
    return res
  })
  //console.log(FINALARRAY2, 'FINALARRAY2')
  
  const FINALARRAY3 = FINALARRAY2.map((elem, index) => {
    let result = []
    
    for (let el of elem) {
     if (el.month < 10 && el.day < 10) {
      let day = `0${el.day}`
      let month = `0${el.month}`
      result.push({date: `${el.year}-${month}-${day}`, retail_amount: el.retail_amount, delivery_rub: el.delivery_rub})
      
    } else if (el.month < 10 && el.day >= 10){
      let month = `0${el.month}`
      
      result.push({date: `${el.year}-${month}-${el.day}`, retail_amount: el.retail_amount, delivery_rub: el.delivery_rub});
      
    } else if (el.month >= 10 && el.day < 10) {
      let day = `0${el.day}`
      result.push({date: `${el.year}-${el.month}-${day}`, retail_amount: el.retail_amount, delivery_rub: el.delivery_rub})
      
    } else {
    result.push({date: `${el.year}-${el.month}-${el.day}`, retail_amount: el.retail_amount, delivery_rub: el.delivery_rub})
    }
      
    }
    
    return result

  })
    console.log(FINALARRAY3, '<===== WB SALES DATA')
    return FINALARRAY3
  }