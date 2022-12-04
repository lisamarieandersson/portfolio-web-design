window.addEventListener('DOMContentLoaded', main);

function main () {
  typeWriter();
}

var letter = 0;
var welcomeMessage = "Hello!"; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (letter < welcomeMessage.length) {
    document.getElementById("hello").innerHTML += welcomeMessage.charAt(letter);
    letter++;
    setTimeout(typeWriter, speed);
  }
}