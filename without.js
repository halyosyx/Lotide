const without = function(source, itemsToRemove){
    console.log(source);

    let newArray = [];

    for (let i = 0; i < source.length; i++) {
        if (!itemsToRemove.includes(source[i])) {
            newArray.push(source[i]);
        }
    }

    return newArray;
};

const assertArraysEqual = function(actual, expected){
    if (Array.isArray(actual)) {
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i] || actual.length < expected.length || actual.length > expected.length) {
                return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
            } else {
                return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
            }
        }
    }
};

console.log(without([1, 2, 3], [1])) // => [2, 3]

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"])

assertArraysEqual(words, ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);