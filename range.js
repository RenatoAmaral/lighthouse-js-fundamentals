function range(start, end, step){
  var rangeArr = [ ];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    rangeArr = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      rangeArr.push(i);
    }
  }
  return rangeArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

