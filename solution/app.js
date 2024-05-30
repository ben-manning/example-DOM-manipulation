// Let's assign elements to variables to keep our code readable and avoid repetition.

// Stop / Slow / Go Light elements - check their IDs in the HTML!
const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

// Stop button
const stopButton = document.getElementById("stopButton");

// when stop button is clicked, run `setStopLight` function
stopButton.addEventListener("click", setStopLight);

// setStopLight turns on the red light and turns off the yellow and green
function setStopLight() {
  stopLight.classList.add("red");
  // BONUS: Remove light classes from other elements
  slowLight.classList.remove("yellow");
  goLight.classList.remove("green");
}

// Let's repeat the above for the other 2 lights

const slowButton = document.getElementById("slowButton");
slowButton.addEventListener("click", setSlowLight);
function setSlowLight() {
  slowLight.classList.add("yellow");
  // BONUS: Remove light classes from other elements
  stopLight.classList.remove("red");
  goLight.classList.remove("green");
}

const goButton = document.getElementById("goButton");
goButton.addEventListener("click", setGoLight);
function setGoLight() {
  goLight.classList.add("green");
  // BONUS: Remove light classes from other elements
  stopLight.classList.remove("red");
  slowLight.classList.remove("yellow");
}
