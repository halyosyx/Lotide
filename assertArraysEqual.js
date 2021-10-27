const assertArraysEqual = function(actual, expected){
    if (Array.isArray(actual)) {
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
            } else {
                return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
            }
        }
    }
}