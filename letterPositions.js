const eqArrays = function (array1, array2) {

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

const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const letterPosition = function (string) {
    const result = {};
    const stringNoSpace = string.split(" ").join('');

    for (let i = 0; i < stringNoSpace.length; i++) {
        if (!stringNoSpace[i].match(/ /)) {
            if (!result[stringNoSpace[i]]) {
                result[stringNoSpace[i]] = [];
            }
            result[stringNoSpace[i]].push(i);
        }
    }

    return result;

}

console.log(letterPosition('lighthouse labs in the house'))