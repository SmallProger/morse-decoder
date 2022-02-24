const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const dash = "11";
const dot = "10";
const dictionary = Object.entries(MORSE_TABLE);

function getDotDashWord(str) {
  let i = 0;
  let dotDashWord = "";
  console.log(str);

  while (i < str.length) {
    let pair = str.substr(i, 2);
    i += 2;

    if (pair == dash) {
      dotDashWord += "-";
    } else if (pair == dot) {
      dotDashWord += ".";
    }
  }
  return dotDashWord;
}
function findLetter(dotDashStr) {
  if (dotDashStr == " ") return " ";
  for (let key of dictionary) {
    if (key[0] == dotDashStr) {
      return key[1];
    }
  }
}
function decode(expr) {
  let i = 0;
  const word_len = 10;
  let dashDotWords = [];
  let result = [];
  while (i < expr.length) {
    let word = expr.substr(i, word_len);
    i += word_len;
    // console.log(getDotDashWord(word));
    if (word == "**********") dashDotWords.push(" ");
    else dashDotWords.push(getDotDashWord(word));
  }
  result = dashDotWords.map(findLetter);
  return result.join("");
}

module.exports = {
  decode,
};
