/* This finds every element with data-year and inserts the current year.
   You normally do not need to edit this file. */
const yearElements = document.querySelectorAll('[data-year]');
yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});
