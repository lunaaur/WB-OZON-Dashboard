const ozonSalesFunction = (OBJ, reqBody) => {
  
  const from = Date.parse(reqBody.date_from)
    const to = Date.parse(reqBody.date_to)
    const resArr = []
    OBJ.forEach(element => {
      if (from < Date.parse(element.dimensions[0].id,) && Date.parse(element.dimensions[0].id,) < to) {
        resArr.push(element)
  
      }
     // console.log(resArr, 'resArr')
      return resArr.sort((prev, next) => Date.parse(prev.rr_dt) - Date.parse(next.rr_dt));
    })
     
  let newObj = resArr.map((el) => {
   // console.log(el,'el')
   // console.log(el.dimensions[0].id, 'ELELELE')
        let year = el.dimensions[0].id.slice(0,4);
        year = Number(year);
        let month = el.dimensions[0].id.slice(5,7);
        month = Number(month);
        let day = el.dimensions[0].id.slice(8,10);
        day = Number(day);
       
        let price = el.metrics[0];
        price = Number(price)
       
        return {year: year, month: month, day: day, price: price};
      });  //* тут зададим те ключи, которые нужны
   console.log(newObj, 'newObj')
   let group1 = newObj.reduce((r, a) => {
    r[a.month] = [...r[a.month] || [], a];
    return r;
   }, {});
  
   let array1 = Object.values(group1)
  // console.log(array1, 'array1')
  
    const group2 = array1.reduce((r, a) => {
     r[a.day] = [...r[a.day] || [], a];
     return r;
    }, {});
   
     let array2 = Object.values(group2)
  //   console.log(array2, 'array2')
    
     const finalArray = []
     //console.log(array2, 'array2')
  
       let array3 = array2[0].map((el, index, array) => {
         let total = 0;
  
         let res = el.map((e, i) => {
          total += e.price
          if (e.month < 10 && e.day < 10) {
            let day = `0${e.day}`
            let month = `0${e.month}`
            finalArray.push({date: `${e.year}-${month}-${day}`, totalPrice: total})
           
          } else if (e.month < 10 && e.day >= 10){
            let month = `0${e.month}`
           
            finalArray.push({date: `${e.year}-${month}-${e.day}`, totalPrice: total});
           
          } else if (e.month >= 10 && e.day < 10) {
            let day = `0${e.day}`
            finalArray.push({date: `${e.year}-${e.month}-${day}`, totalPrice: total})
           
          } else {
          finalArray.push({date: `${e.year}-${e.month}-${e.day}`, totalPrice: total})
          }
          return finalArray
         })
  })
    console.log(finalArray, '<==== ozonSALES')
    return finalArray
  }
  
 const ozonOrdersFunction = (OBJ, reqBody) => {
  const from = Date.parse(reqBody.date_from)
  const to = Date.parse(reqBody.date_to)
  const resArr = []
  OBJ.forEach(element => {
    if (from < Date.parse(element.dimensions[0].id,) && Date.parse(element.dimensions[0].id,) < to) {
      resArr.push(element)

    }
   // console.log(resArr, 'resArr')
    return resArr.sort((prev, next) => Date.parse(prev.rr_dt) - Date.parse(next.rr_dt));
  })
   
let newObj = resArr.map((el) => {
 // console.log(el,'el')
 // console.log(el.dimensions[0].id, 'ELELELE')
      let year = el.dimensions[0].id.slice(0,4);
      year = Number(year);
      let month = el.dimensions[0].id.slice(5,7);
      month = Number(month);
      let day = el.dimensions[0].id.slice(8,10);
      day = Number(day);
     
     // console.log( el.metrics[0], ' el.metrics[0];')
      //console.log( el.metrics, ' el.metrics')
      let quantity = el.metrics[0];
      quantity = Number(quantity)
     
      return {year: year, month: month, day: day, quantity: quantity};
    });  //* тут зададим те ключи, которые нужны
 let group1 = newObj.reduce((r, a) => {
  r[a.month] = [...r[a.month] || [], a];
  return r;
 }, {});

 let array1 = Object.values(group1)
// console.log(array1, 'array1')

  const group2 = array1.reduce((r, a) => {
   r[a.day] = [...r[a.day] || [], a];
   return r;
  }, {});
 
   let array2 = Object.values(group2)
//   console.log(array2, 'array2')
  
   const finalArray = []
   //console.log(array2, 'array2')

     let array3 = array2[0].map((el, index, array) => {
       let total = 0;

       let res = el.map((e, i) => {
        total += e.quantity
        if (e.month < 10 && e.day < 10) {
          let day = `0${e.day}`
          let month = `0${e.month}`
          finalArray.push({date: `${e.year}-${month}-${day}`, quantity: total})
         
        } else if (e.month < 10 && e.day >= 10){
          let month = `0${e.month}`
         
          finalArray.push({date: `${e.year}-${month}-${e.day}`, quantity: total});
         
        } else if (e.month >= 10 && e.day < 10) {
          let day = `0${e.day}`
          finalArray.push({date: `${e.year}-${e.month}-${day}`, quantity: total})
         
        } else {
        finalArray.push({date: `${e.year}-${e.month}-${e.day}`, quantity: total})
        }
        return finalArray
       })
})
  console.log(finalArray, '<==== ozonREFUNDS')
  return finalArray
 }
  
 const ozonRefundsFunction = (OBJ, reqBody) => {
  const from = Date.parse(reqBody.date_from)
  const to = Date.parse(reqBody.date_to)
  const resArr = []
  OBJ.forEach(element => {
    if (from < Date.parse(element.dimensions[0].id,) && Date.parse(element.dimensions[0].id,) < to) {
      resArr.push(element)

    }
   // console.log(resArr, 'resArr')
    return resArr.sort((prev, next) => Date.parse(prev.rr_dt) - Date.parse(next.rr_dt));
  })
   
let newObj = resArr.map((el) => {
 // console.log(el,'el')
 // console.log(el.dimensions[0].id, 'ELELELE')
      let year = el.dimensions[0].id.slice(0,4);
      year = Number(year);
      let month = el.dimensions[0].id.slice(5,7);
      month = Number(month);
      let day = el.dimensions[0].id.slice(8,10);
      day = Number(day);
     
      //console.log( el.metrics[0], ' el.metrics[0];')
      //console.log( el.metrics, ' el.metrics')
      let quantity = el.metrics[0];
      quantity = Number(quantity)
     
      return {year: year, month: month, day: day, quantity: quantity};
    });  //* тут зададим те ключи, которые нужны
 let group1 = newObj.reduce((r, a) => {
  r[a.month] = [...r[a.month] || [], a];
  return r;
 }, {});

 let array1 = Object.values(group1)
// console.log(array1, 'array1')

  const group2 = array1.reduce((r, a) => {
   r[a.day] = [...r[a.day] || [], a];
   return r;
  }, {});
 
   let array2 = Object.values(group2)
//   console.log(array2, 'array2')
  
   const finalArray = []
   //console.log(array2, 'array2')

     let array3 = array2[0].map((el, index, array) => {
       let total = 0;

       let res = el.map((e, i) => {
        total += e.quantity
        if (e.month < 10 && e.day < 10) {
          let day = `0${e.day}`
          let month = `0${e.month}`
          finalArray.push({date: `${e.year}-${month}-${day}`, quantity: total})
         
        } else if (e.month < 10 && e.day >= 10){
          let month = `0${e.month}`
         
          finalArray.push({date: `${e.year}-${month}-${e.day}`, quantity: total});
         
        } else if (e.month >= 10 && e.day < 10) {
          let day = `0${e.day}`
          finalArray.push({date: `${e.year}-${e.month}-${day}`, quantity: total})
         
        } else {
        finalArray.push({date: `${e.year}-${e.month}-${e.day}`, quantity: total})
        }
        return finalArray
       })
})
  console.log(finalArray, '<==== ozonREFUNDS')
  return finalArray
 }
  
  
  export  {ozonSalesFunction, ozonOrdersFunction, ozonRefundsFunction}
 
 