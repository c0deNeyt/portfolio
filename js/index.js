var typed = new Typed(".typing", {
  strings: ["Web Developer", "Who", "Love LINUX"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

AOS.init({
  offset: 400,
  duration: 1000,
});

// Get the button and menu elements
const actionButton = document.getElementById("actionButton");
const actionMenu = document.getElementById("actionMenu");

// Toggle the menu visibility when the button is clicked
actionButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent event from bubbling
  actionMenu.style.display =
    actionMenu.style.display === "block" ? "none" : "block";
});

// Hide the menu when clicking outside of it
document.addEventListener("click", function () {
  actionMenu.style.display = "none";
});
