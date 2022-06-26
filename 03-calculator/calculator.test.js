const calculator = require('./calculator.js');

test('Given two numbers, calculate correct number', () => { 
  expect(calculator.add(1,2)).toEqual(3);
  expect(calculator.sub(10,5)).toEqual(5);
  expect(calculator.div(20,2)).toEqual(10);
  expect(calculator.mul(4,4)).toEqual(16);
 });
 