function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  return arr;
}

function addNum(x){
  return x + 1;
}

console.log(

  forEach([0, 1, 2], addNum),
  //returns [1, 2, 3]

  forEach([3, 1, 2], addNum),
  //returns [4, 2, 3]

);
