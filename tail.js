const assertArrayEqual = require('./assertArraysEqual')

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

assertArrayEqual(tail(num), [2,3,4,5])

assertArrayEqual(num.length, 5);