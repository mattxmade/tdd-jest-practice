function reverseString(str) {
  if (typeof str !== 'string') return 'Please enter a string';
  return str.split("").reverse().join("");
}

module.exports = reverseString;