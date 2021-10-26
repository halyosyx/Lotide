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

const tail = function(array) {

    const tailArray = [];

    if (array === [] || array.length === 1) {
        return [];
    }

    for (let i = 1; i  < array.length; i++) {
        
        tailArray.push(array[i]);

    }

    return tailArray;

};

const num = [1,2,3,4,5]


console.log(tail(num));

assertEqual(tail(num), [2,3,4,5])

assertEqual(num.length, 5);