var start, end; // start and end of button press
var l, w, m; //letter, word and message timeouts
var letter = ""; //active letter
var word = ""; //active word
var message = ""; //whole message

var morse = //morse code

{ '-----': '0',
  '.---': 'J',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z' };

var logs = function () {
  if (digitalRead(BTN1)) {
    try {
      clearTimeout(l);
    } catch (err) {}
    try {
      clearTimeout(w);
    } catch (err) {}
    try {
      clearTimeout(m);
    } catch (err) {}
    start = new Date();
  }
  if (!digitalRead(BTN1)) {
    end = new Date();
    var dur = end - start;
    if (dur < 200) {
      letter += ".";
    } else {
      letter += "-";
    }
    l = setTimeout(function () {
      word += morse[letter];
      letter = "";
    },200);
    w = setTimeout(function () {
      message += " " + word;
      word = "";
    },400);
    m = setTimeout(function () {
      message = message.substring(1);
      console.log(message);
      message = "";
    },800);
  }
};

setWatch(logs, BTN1, { repeat: true, debounce: 50 });