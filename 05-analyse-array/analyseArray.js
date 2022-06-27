function analyseArray(array) {
  // guard clauses
  if (!array.length) return "Array is empty";

  for (const element of array)
    if (isNaN(element)) return "Array must contain only numbers";

  // retain data without mutation | Pure Function
  const sortArray = array.sort((a, z) => a - z);

  // return new object
  return {
    average: sortArray[sortArray.length - 1] / 2,
    min: sortArray[0],
    max: sortArray[sortArray.length - 1],
    length: sortArray.length,
  };
}

const object = analyseArray([1, 8, 3, 4, 2, 6]);
console.log(object);

module.exports = analyseArray;
