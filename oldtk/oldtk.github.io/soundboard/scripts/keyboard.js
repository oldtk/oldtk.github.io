document.addEventListener('keydown', function (event) {
  if (enggreek.includes(event.key)) {
    const path = 'sounds/' + keys[event.key][isLowerCase(event.key) ? 0 : 1] + '.aac'
    playSound(path);
  }
});