// Define a variable to store the start date
let startDateAvi = new Date(1978, 10, 27, 22, 10,10); // Month is zero-based
let startDateMika = new Date(1980, 7, 31, 23, 30, 50);
let startDateAnan = new Date(2013, 2, 17, 2, 0, 0);

// Define a variable to store the maximum number of years
let maxYears = 1000;
// Define a variable to store the size of each digit
let digitSize = 20;

// Define a function to format the time with leading zeros
function formatTime(n) {
  return n.toString().padStart(2, "0");
}
// Define a function to draw a digit with a square
function drawDigit(digit, x, y) {
  // Set the stroke color and weight
  fill(0);
  stroke(0);
  strokeWeight(1);
  // Draw a square with no fill around the digit
  fill(255);
  rect(x, y - 5, digitSize, digitSize + 7);
  // Draw the digit in the center of the square
  fill(0);
  textSize(digitSize);
  textAlign(CENTER, CENTER);
  text(digit, x + digitSize / 2, y + digitSize / 2);
}

// Define a function to draw the time on the screen
function drawTime(h, PersonDate,NumberOfZero) {
  // Get the current date
  let currentDate = new Date();
  // Calculate the difference in milliseconds
  let diff = currentDate - PersonDate;
  // Convert the difference to hours, minutes, and seconds
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  // Reset the time if the maximum number of years is reached
  if (hours >= maxYears * 365 * 24) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  // Format the time with leading zeros
  let formattedTime =
    NumberOfZero +
    formatTime(hours) +
    ":" +
    formatTime(minutes) +
    ":" +
    formatTime(seconds);

  // Split the time into digits
  let digits = formattedTime.split("");
  // Calculate the starting position of the time
  let startX = width / 2 - (digits.length * digitSize + 2 * digitSize) / 2;
  let startY = height / 2 - digitSize / 2 - h;

  // Draw each digit with a square
  for (let i = 0; i < digits.length; i++) {
    // Skip the colons
    if (digits[i] === ":") {
      continue;
    }

    // Draw the digit with a square
    drawDigit(digits[i], startX + i * digitSize, startY);
  }
}

// Setup the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Draw the time every frame
function draw() {
  background(255);
  drawTime(0, startDateAvi,"0",17,0);
  drawTime(100, startDateMika,"0",9,15);
  drawTime(-100, startDateAnan,"00",2,32);
}
