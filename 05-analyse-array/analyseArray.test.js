const analyseArray = require("./analyseArray");

test("Return an object with sort properties", () => {
  const object = analyseArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Return error message when given array is empty", () => {
  const object = analyseArray([]);
  expect(object).toBe("Array is empty");
});

test("Return error message when item of array is not a number", () => {
  const object = analyseArray(["I", "VIII", "III", "IV", "III", "VI"]);
  expect(object).toBe("Array must contain only numbers");
});
