function capitalize(str) {
  console.log(str);
  if (typeof str !== 'string') return 'Please enter a string';

  str = str.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}

module.exports = capitalize;