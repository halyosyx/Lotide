const middle = function(array) {

  let middleElement = [];
  let middle = array.length / 2;

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 == 1) {
    middleElement.push(array[Math.floor(middle)]);
  }
  if (array.length % 2 == 0) {
      middleElement.push(array[middle - 1]);
      middleElement.push(array[middle]);
  }

  return middleElement;

};

module.exports = middle;