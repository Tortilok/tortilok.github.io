const scrollingTheWheel = document.getElementById('text2');
const scrollingTheWheelContainer = document.getElementById('spinningTheWheel');
let x = 0;
scrollingTheWheelContainer.onclick = () => {
    x = x + 11;
    scrollingTheWheel.style.transform = 'rotate(' + x + 'deg)'
}