function titleCase(str) {
  let strArr = str.split(' ')
  let result = []
  for(let i = 0; i < strArr.length; i++){
    result.push(strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase())
  }


  return result.join(' ')
}

console.log(titleCase("sHoRt AnD sToUt"));