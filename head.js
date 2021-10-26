const assertEqual = function(actual, expected) {

    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  
  };

  const head = function(array) {

    if (array === []) {
        return undefined;
    }

    return array[0];
  }

  assertEqual(head([5,6,7]), 5);

  assertEqual(head([]), undefined);

  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");