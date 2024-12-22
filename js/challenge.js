// Get references to the DOM elements
const counterDisplay = document.getElementById('counter');  // Display the counter value
const plusButton = document.getElementById('plus');  // Plus button
const minusButton = document.getElementById('minus');  // Minus button
const likeButton = document.getElementById('like');  // Like button
const pauseButton = document.getElementById('pause');  // Pause/Resume button
const commentBox = document.getElementById('comment');  // Comment input
const commentList = document.getElementById('comment-list');  // List of comments
let counter = 0;
let isPaused = false;
let likes = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    if (!isPaused) {
      counter++;
      counterDisplay.textContent = counter;
    }
  }, 1000);
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(timer);  // Stop the timer when paused
    pauseButton.textContent = 'Resume';  // Change button text
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    startTimer();  // Restart the timer
    pauseButton.textContent = 'Pause';  // Change button text
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  }
}

function incrementCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

function decrementCounter() {
  counter--;
  counterDisplay.textContent = counter;
}

function likeCounter() {
  likes++;
  alert(`You liked the number: ${counter}. Total likes: ${likes}`);
}

function addComment(event) {
  event.preventDefault();  // Prevent page refresh on form submit
  const commentText = commentBox.value;
  const listItem = document.createElement('li');
  listItem.textContent = commentText;
  commentList.appendChild(listItem);
  commentBox.value = '';  // Clear the comment box
}

// Event Listeners
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
likeButton.addEventListener('click', likeCounter);
pauseButton.addEventListener('click', togglePause);
commentBox.addEventListener('submit', addComment);

// Start the timer when the page loads
window.addEventListener('DOMContentLoaded', startTimer);
