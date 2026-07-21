// ===========================
// ELEMENTS
// ===========================

const book = document.querySelector(".book-container");
const closedBook = document.getElementById("closedBook");
const openBook = document.getElementById("openBook");
const desk = document.querySelector(".desk");
const overlay = document.querySelector(".overlay");
const openingScene = document.querySelector(".opening-scene");
const journal = document.getElementById("journal");

const energy = document.getElementById("energy");
const story = document.getElementById("energyStory");
const closeStory = document.getElementById("closeStory");

// ===========================
// OPEN NOTEBOOK
// ===========================

book.addEventListener("click", () => {
  if (book.classList.contains("open")) return;

  book.classList.add("open");

  closedBook.style.opacity = "0";
  openBook.style.opacity = "1";

  desk.style.filter = "brightness(.55)";
  overlay.style.opacity = ".35";

  setTimeout(() => {
    openingScene.style.display = "none";
    journal.style.display = "flex";
  }, 1800);
});

// ===========================
// ENERGY POPUP
// ===========================

energy.addEventListener("click", (e) => {
  e.stopPropagation();

  story.classList.add("show");
});

closeStory.addEventListener("click", (e) => {
  e.stopPropagation();

  story.classList.remove("show");
});

// Optional: Close popup by clicking outside the paper
story.addEventListener("click", (e) => {
  if (e.target === story) {
    story.classList.remove("show");
  }
});

// ===========================
// CONTINUE TO SCRAPBOOK
// ===========================

journal.addEventListener("click", (e) => {
  if (e.target.closest("#energy")) return;

  if (story.classList.contains("show")) return;

  window.location.href = "scrapbook.html";
});
