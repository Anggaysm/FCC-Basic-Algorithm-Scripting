function truncateString(str, num) {
  if(str.length > num){
    return str.slice(0, num) + '...'
  }else{
    return str;
  }


  // return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))