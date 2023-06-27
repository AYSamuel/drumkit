const buttons = document.querySelectorAll('.drum');
const body = document.body;
for (let btn of buttons) {
  btn.addEventListener('click', function () {
    playDrums(btn.innerHTML);
  });
}

document.addEventListener('keydown', function (event) {
  playDrums(event.key);
});

function playDrums(param) {
  switch (param) {
    case 'w':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'a':
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'd':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'j':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'k':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'l':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log('invalid');
      break;
  }
}
