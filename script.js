const body = document.querySelector("body");
const navbar = document.querySelector(".nav-container");
const darkLight = document.querySelector(".dark-light");
const sidebar = document.querySelector(".sidebar");
// console.log(darkLight);
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
// dark light mode js below
darkLight.addEventListener("click", () => {
  darkLight.classList.toggle("active");
  body.classList.toggle("dark");
});

hamburger.addEventListener("click", () => {
  sidebar.classList.add("ham-active");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("ham-active");
});
