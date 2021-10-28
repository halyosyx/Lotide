
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)

  };


const countLetters = function(sentence){

    const result = {};
    //Ignores space 
    const sentenceNoSpace = sentence.split(" ").join('');

    for (const letter of sentenceNoSpace) {
        if (result[letter]) {
            result[letter] += 1;
        } else {    
            result[letter] = 1;
        }
    }

    return console.log(result);
}

countLetters('hellofriend');
countLetters('lighthouse labs');