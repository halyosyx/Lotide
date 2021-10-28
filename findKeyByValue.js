const findKeyByValue = function(movies, value){

    for (const genre of Object.keys(movies)) {
        if (movies[genre] === value) {
            return genre;
        }
    }
};

const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)

  };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

  assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  //console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))