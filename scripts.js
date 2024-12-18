document.addEventListener("DOMContentLoaded", () => {
  const introBackground = document.getElementById("intro-background");
  const enterButton = document.getElementById("enter-site");

  // Hide the introduction background when the button is clicked
  enterButton.addEventListener("click", () => {
    introBackground.classList.add("hidden");
  });

  // Optional: Auto-hide the intro after a few seconds
  setTimeout(() => {
    introBackground.classList.add("hidden");
  }, 5000); // 5 seconds
});
// scripts.js
document.getElementById("enter-site").addEventListener("click", () => {
  document.getElementById("intro-background").style.display = "none";
  document.body.style.overflow = "auto";
});
