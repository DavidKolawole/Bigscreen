// script.js

// Get elements
const loginPopup = document.getElementById("loginPopup");
const loginPopupButton = document.getElementById("loginPopupButton");
const closeBtn = document.querySelector(".close-btn");
const visitorButton = document.getElementById("visitorButton");

// Show pop-up when "Log in as a Business" button is clicked
loginPopupButton.addEventListener("click", function() {
    loginPopup.style.display = "block";
});

// Hide pop-up when close button (×) is clicked
closeBtn.addEventListener("click", function() {
    loginPopup.style.display = "none";
});

// Hide pop-up when "Enter as a visitor" button is clicked
visitorButton.addEventListener("click", function() {
    loginPopup.style.display = "none";
});

// Hide pop-up if user clicks outside the pop-up content
window.addEventListener("click", function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});
