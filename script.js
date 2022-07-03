const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const body = document.querySelector(".bg");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  body.classList.toggle("bg");
});
