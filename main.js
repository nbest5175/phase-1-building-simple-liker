const { Runnable } = require("mocha");

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Event Listener for Clicking on Empty Heart
document.querySelector('.like-glyph').addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // Server call successful
      // Change the heart to full heart and add activated-heart class
      document.querySelector('.like-glyph').classList.add('activated-heart');
    })
    .catch(() => {
      // Server call failed
      const errorModal = document.querySelector('.modal');
      const errorMessage = "Server request failed. Please try again later.";
      // Display error modal
      errorModal.classList.remove('hidden');
      errorModal.querySelector('.modal-message').innerText = errorMessage;
      // Hide error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// Event Listener for Clicking on Full Heart
document.querySelector('.activated-heart').addEventListener('click', () => {
  // Change the heart back to empty heart
  document.querySelector('.like-glyph').classList.remove('activated-heart');
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Objective 1: Add .hidden to error modal in HTML so that it doesn't appear when page loads

// Objective 2: - with sub objectives - when user clicks empty heart
// - call/execute code mimicServerCall with a function
// - "server" must return a failure status
// - .then block usage and after responding to the error using .catch
// - remove the .hidden class
// - display the server error Message 
// - use setTimeout function to hide modal after 3 seconds, then add .hidden class
// - "server" returns success status 
// - use fontAwesome to change heart to full heart 
// - add .activated-heart class to make the heart appear red 

// Objective 3: - with sub objectives - when user clicks full heart
// - change heart back to empty heart 
// - remove .activated-heart class 

// Objective 4: Rules: keep styling rules in Style.css & don't manipulate any .style properties

// Objective 5: Once server request responds, manipulate the DOM. After inside .then block, make heart full

