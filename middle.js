const eqArrays = function(array1, array2) {

    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        } 
    }

    return true;

};

const assertArraysEqual = function(actual, expected){
    if (eqArrays(actual, expected)) {
        return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const middle = function(array) {

  let middleElement = [];
  let middle = array.length / 2;

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 == 1) {
    middleElement.push(array[Math.floor(middle)]);
  }
  if (array.length % 2 == 0) {
      middleElement.push(array[middle - 1]);
      middleElement.push(array[middle]);
  }

  return middleElement;

};

console.log(middle([]));

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([23,12]), []);
assertArraysEqual(middle([44,70,90]), [70]);
assertArraysEqual(middle([44,70,90,44,56,90]), [90,44]);