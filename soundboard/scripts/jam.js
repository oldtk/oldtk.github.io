const bpm = document.getElementById('jam-range');
const bpmValue = document.getElementById('jam-text');

bpm.addEventListener('input', function () {
  bpmValue.innerHTML = 'BPM ' + bpm.value;
});

const jam = document.getElementById('jam-button');
jam.addEventListener('click', function () {
  const input = document.getElementById('jam-input');
  var text = normalize(input.value);

  for (let i = 0; i < text.length; i++) {
    if (enggreek.includes(text[i])) {
      setTimeout(function () {

        const path = 'sounds/' + keys[text[i]][isLowerCase(text[i]) ? 0 : 1] + '.aac';

        playSound(path);
      }, i * bpmtoms(bpm.value));
    }
    else if (special.includes(text[i])) {
      setTimeout(function () {
        const path = 'sounds/' + keys[text[i]] + '.aac';
        
        playSound(path);
      }, i * bpmtoms(bpm.value));
    }
  }
});