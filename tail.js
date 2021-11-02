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

module.exports = tail;