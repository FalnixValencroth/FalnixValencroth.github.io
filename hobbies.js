// JavaScript to create the raining flowers effect
const flowerCount = 30;
const container = document.querySelector(".rain");

for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    container.appendChild(flower);
}

// Adjust the falling speed and animation duration based on the number of flowers and the page height
const pageHeight = document.body.clientHeight;
const animationDuration = 15 + flowerCount * 2;

document.styleSheets[0].insertRule(`@keyframes falling {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(${pageHeight}px); opacity: 1; }
}`, 0);

// hobbies.js

// Function to update like and dislike count in the DOM
function updateFeedbackCount(videoCard) {
  const likeCount = videoCard.querySelector(".like-count");
  const dislikeCount = videoCard.querySelector(".dislike-count");

  // Retrieve data from Local Storage or initialize to 0
  let likes = parseInt(localStorage.getItem("likes")) || 0;
  let dislikes = parseInt(localStorage.getItem("dislikes")) || 0;

  likeCount.textContent = likes;
  dislikeCount.textContent = dislikes;
}

// Function to handle like and dislike button clicks
function handleFeedbackClick(event) {
  const videoCard = event.target.closest(".image-item");
  const likeBtn = videoCard.querySelector(".like-btn");
  const dislikeBtn = videoCard.querySelector(".dislike-btn");

  // Check if the clicked button is the like button
  if (event.target === likeBtn) {
    let likes = parseInt(localStorage.getItem("likes")) || 0;
    likes += 1;
    localStorage.setItem("likes", likes);
    updateFeedbackCount(videoCard);
  }

  // Check if the clicked button is the dislike button
  if (event.target === dislikeBtn) {
    let dislikes = parseInt(localStorage.getItem("dislikes")) || 0;
    dislikes += 1;
    localStorage.setItem("dislikes", dislikes);
    updateFeedbackCount(videoCard);
  }
}

// Attach click event listeners to all like and dislike buttons
const likeButtons = document.querySelectorAll(".like-btn");
const dislikeButtons = document.querySelectorAll(".dislike-btn");

likeButtons.forEach((btn) => btn.addEventListener("click", handleFeedbackClick));
dislikeButtons.forEach((btn) => btn.addEventListener("click", handleFeedbackClick));

// Initialize the feedback counts when the page loads
const videoCards = document.querySelectorAll(".image-item");
videoCards.forEach((card) => updateFeedbackCount(card));

