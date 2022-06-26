const reverseString = require('./reverseString');

test('String should return in reverse', () => { 
  expect(reverseString('123456789')).toBe('987654321');
  expect(reverseString('Tacocat')).toBe('tacocaT');
  expect(reverseString('-%__M__%%')).toBe('%%__M__%-');
  expect(reverseString('Hello World')).toBe('dlroW olleH');
 });

 test('Returns error is input is not a string', () => {
  expect(reverseString(123)).toBe('Please enter a string');
 });