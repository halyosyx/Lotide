const assertEqual = function(actual, expected) {

    if (Array.isArray(actual)) {
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
            } else {
                return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
            }
        }
    }

    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  
  };


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1,"2",3],[1,2,3]), true );