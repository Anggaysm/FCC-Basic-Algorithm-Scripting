function mutation(arr) {
  let [arr1, arr2] = arr;
  arr1 = arr1.toUpperCase();
  arr2 = arr2.toUpperCase()
  for (let i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) === -1){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "dfgh"]));