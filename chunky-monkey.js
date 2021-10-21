function chunkArrayInGroups(arr, size) {
  let arrKecil = []
  let arrGede = []
  let angkanya = 0;
  for (let i = 0; i < arr.length; i ++){
    arrKecil.push(arr[i]);
    angkanya++;
    if( angkanya === size ){
      arrGede.push(arrKecil);
      angkanya = 0;
      arrKecil = []
    }
  }
  if( arrKecil.length > 0){
    arrGede.push(arrKecil)
  }
  return arrGede;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));