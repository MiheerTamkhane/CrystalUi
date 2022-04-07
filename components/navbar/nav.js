const navHamburger = document.querySelector(".ct-nav-hamburger");
const ctNavSidebar = document.querySelector(".ct-nav-sidebar");
const ctUserAcc = document.querySelector(".ct-nav-account");
const person = document.querySelector(".person");
let temp = false;
navHamburger.addEventListener("click", () => {
  if (temp) {
    ctNavSidebar.classList.add("show");
    temp = false;
  } else {
    ctNavSidebar.classList.remove("show");
    temp = true;
  }
});
person.addEventListener("click", () => {
  if (temp) {
    ctUserAcc.classList.add("show");
    temp = false;
  } else {
    ctUserAcc.classList.remove("show");
    temp = true;
  }
});
