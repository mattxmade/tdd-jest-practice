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
