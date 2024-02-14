function playSound(file) {
  var audio = new Audio(file);
  audio.play();
}

function bpmtoms(bpm) {
  return 60000 / bpm;
}

function isLowerCase(str) {
  return str === str.toLowerCase() &&
    str !== str.toUpperCase();
}

function normalize(str) {
  str = str.replaceAll('ει', 'ι').replaceAll('οι', 'ι').replaceAll('υι', 'ι').replaceAll('αι', 'ε')    .replaceAll('Ά', 'Α').replaceAll('Έ', 'Ε').replaceAll('Ή', 'Η').replaceAll('Ί', 'Ι').replaceAll('Ό', 'Ο').replaceAll('Ύ', 'Υ').replaceAll('Ώ', 'Ω')
    .replaceAll('ΕΙ', 'Ι').replaceAll('ΟΙ', 'Ι').replaceAll('ΥΙ', 'Ι').replaceAll('ΑΙ', 'Ε')
    .replaceAll('ευ', 'εφ').replaceAll('αυ', 'αβ')
    .replaceAll('ΕΥ', 'ΕΦ').replaceAll('ΑΥ', 'ΑΒ')
    .replaceAll('Ά', 'Α').replaceAll('Έ', 'Ε').replaceAll('Ή', 'Η').replaceAll('Ί', 'Ι').replaceAll('Ό', 'Ο').replaceAll('Ύ', 'Υ').replaceAll('Ώ', 'Ω')
    .replaceAll('ϊ', 'ι').replaceAll('ϋ', 'υ').replaceAll('ΐ', 'ι').replaceAll('ΰ', 'υ')
    .replaceAll('Ϊ', 'Ι').replaceAll('Ϋ', 'Υ')
    .replaceAll('ου', '.').replaceAll('ΟΥ', '!').replaceAll('γκ', ',').replaceAll('ΓΚ', '?').replaceAll('γγ', ',').replaceAll('ΓΓ', '?')
    .replaceAll('μπ', '@').replaceAll('ΜΠ', ';');

  return str;
}