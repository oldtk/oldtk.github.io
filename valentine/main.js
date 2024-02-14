var yes    = document.getElementById('yes');
var no     = document.getElementById('no');
var gif    = document.getElementById('bear');
var phrase = document.getElementById('phrase');

var pressedYes = false;

var goodGif = "https://i.giphy.com/vlA2kWjGy2tZUU1X5d.webp"

var badGifs = [
  "https://i.giphy.com/LfTu28H05pKCbyCMkt.webp",
  "https://i.giphy.com/hnz3zADAKnH5SFhkfJ.webp"
]

yes.addEventListener('click', function() {
  pressedYes = true;

  gif.src = goodGif;
  phrase.innerHTML = goodPhrase;
});

goodPhrase = "YAY! I love you <3"

phrases = [
  "You don't even love me anymore... :(",
  "You hate me sooo",
  "Love me, Love me, say that you love me",
  "Wah wahhhhh"
]


no.addEventListener('click', noFunc);

let i = 0;
let j = 0;

function noFunc() {
  if (pressedYes) {
    return;
  }

  gif.src = badGifs[i];
  phrase.innerHTML = phrases[j];

  i = (i + 1) % badGifs.length;
  j = (j + 1) % phrases.length;
}