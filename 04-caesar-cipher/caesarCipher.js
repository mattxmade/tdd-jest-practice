const caesarCipher = (str, shift = 1) => {
  // guard clauses
  if (typeof str !== "string") return alert("First value must be a string");
  if (typeof shift !== "number") return alert("Second value must be a number");

  // character map object
  const charMap = charCode();

  // character map arrays
  const number = charMap.numbers;
  const upCase = charMap.upperCaseChar;
  const loCase = charMap.lowerCaseChar;
  const punctuation = charMap.punctuation;

  // array to hold value of final cipher
  const cipher = [];

  str = str.split("");

  // ciper algorithm
  for (const strChar of str) {
    if (number.includes(strChar)) cipher.push(strChar);
    if (punctuation.includes(strChar)) cipher.push(strChar);

    upCase.forEach((item, index) => {
      const charAtIndex =
        index + shift > 25 ? index + shift - 26 : index + shift;

      if (strChar === upCase[index]) cipher.push(upCase[charAtIndex]);
      if (strChar === loCase[index]) cipher.push(loCase[charAtIndex]);
    });
  }
  return cipher.join("");
};

function charCode() {
  const numbers = [];
  const punctuation = [];
  const upperCaseChar = [];
  const lowerCaseChar = [];

  for (let i = 32; i !== 126; i++) {
    // 48-57 [A-Z] | 65-90 [a-z] | 97-122 [0-9] | n [punctuation]
    if (i >= 48 && i <= 57) numbers.push(String.fromCharCode(i));
    else if (i >= 65 && i <= 90) upperCaseChar.push(String.fromCharCode(i));
    else if (i >= 97 && i <= 122) lowerCaseChar.push(String.fromCharCode(i));
    else punctuation.push(String.fromCharCode(i));
  }

  return { upperCaseChar, lowerCaseChar, punctuation, numbers };
}

function alert(message) {
  console.log(message);

  return message;
}

module.exports = caesarCipher;
