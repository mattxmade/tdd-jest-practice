const caesarCipher = require("./caesarCipher");

test("Return a string with characters shifted by a given input", () => {
  expect(caesarCipher("I like chemistry", 10)).toBe("S vsuo mrowscdbi");
});

test("Respect punctuation & number position", () => {
  expect(caesarCipher("I like chemistry!", 10)).toBe("S vsuo mrowscdbi!");
  expect(caesarCipher("1 l1ke chem1stry!", 10)).toBe("1 v1uo mrow1cdbi!");
});

test("Return error message for invalid arguments", () => {
  expect(caesarCipher(1, "7")).toBe("First value must be a string");
  expect(caesarCipher("abc", "7")).toBe("Second value must be a number");
});
