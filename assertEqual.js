const assertEqual = function(actual, expected) {

  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)

};



assertEqual(1,1);
assertEqual("Lighthouse","Bootcamp");
assertEqual(2,4);
assertEqual("Aisle" , "Aisle");
