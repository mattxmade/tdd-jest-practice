const capitalize = require('./capitalize');

test('Capitalize first character of string', () => { 
  expect(capitalize('one')).toBe('One');
 });

 test('Returns error if not a string', () => { 
  expect(capitalize(1)).toBe('Please enter a string');
 });