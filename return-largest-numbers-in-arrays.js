function largestOfFour(arr) {
  let angkaTerbesar = []
  
  for (let i = 0; i < arr.length; i++){
    let cariArr = -Infinity;
    for(let j = 0; j <= arr[i].length; j++) {
        if (arr[i][j] > cariArr){
          cariArr = arr[i][j];
        }
    }
    angkaTerbesar.push(cariArr)
  }
  return angkaTerbesar;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

