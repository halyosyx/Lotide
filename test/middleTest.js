const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([]), []);
assertArraysEqual(middle([23,12]), []);
assertArraysEqual(middle([44,70,90]), [70]);
assertArraysEqual(middle([44,70,90,44,56,90]), [90,44]);