function map(arr, callback) {
  var transformedArr = [];
  for (var i = 0; i < arr.length; i++) {
    transformedArr.push(callback(arr[i]));
  }
  return transformedArr;
}

function addNum(x){
  return x + 1;
}

var originalArr = [1, 2, 3, 3, 4, 5];

console.log(
  map([0, 1, 2], addNum),
  //returns [1, 2, 3]

  map([2, 3, 4], addNum),
  //returns [3, 4, 5]

  map(originalArr, addNum),
  //returns [2, 3, 4, 5, 6]

  originalArr
  //returns [1, 2, 3, 4, 5]
  //originalArr remains unchanged.
  //use map to return a transformed array independent of original input array  
);
