
function audioLinking(who) {
  var buttons = document.getElementsByClassName(who + '-button');

  for (let i = 1; i < buttons.length  + 1; i++) {
    buttons[i - 1].addEventListener('click', function() {
      playSound('sounds/' + buttons[i - 1].id + '.aac')
    });
  }
}

audioLinking('ermis');
audioLinking('eleni');

document.getElementById('stop-button').addEventListener('click', function() {
  window.location.reload();
});