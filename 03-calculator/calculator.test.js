const calculator = require('./calculator.js');

test('Given two numbers, calculate correct number', () => { 
  expect(calculator.add(1,2)).toEqaul(3);
  expect(calculator.subtract(10,5)).toEqaul(5);
  expect(calculator.divide(20,2)).toEqaul(10);
  expect(calculator.multiply(4,4)).toEqaul(16);
 });