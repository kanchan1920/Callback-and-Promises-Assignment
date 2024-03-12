// 1. Double using callback
function doubleArray(arr, callback){
     const doubledArr = arr.map((num)  => {
          return callback(num);
          });
          return  doubledArr;
}

const originalArray = [1, 2, 3, 4];

function callback(num) {
     return num * 2;
}

const doubleArray = doubleArray(originalArray, callback);

console.log(doubleArray); // output : [2, 4, 6, 8]    