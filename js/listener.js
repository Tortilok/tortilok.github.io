command = document.getElementById("vvod");
command.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

const body = document.querySelector('body');
const scrollingTheWheel = document.getElementById('text2');
const scrollingTheWheelContainer = document.getElementById('spinningTheWheel');
let x = 0;
var count = 33;

body.addEventListener("keyup", function(event) {
  if (event.keyCode == 39) {
    x = x + 11;
    count ++;
    scrollingTheWheel.style.transform = 'rotate(' + x + 'deg)'
    document.getElementById('count').innerHTML = count % 33;
  }
  else if (event.keyCode == 37) {
    x = x - 11;
    count --;
    scrollingTheWheel.style.transform = 'rotate(' + x + 'deg)'
    document.getElementById('count').innerHTML = count % 33;
  }
});

scrollingTheWheelContainer.onclick = () => {
    count ++;
    x = x + 11;
    scrollingTheWheel.style.transform = 'rotate(' + x + 'deg)'
    document.getElementById('count').innerHTML = count % 33;
}
