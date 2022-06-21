let dark = localStorage.getItem("dark");
const navbar = document.querySelector(".nav-container");
const darkLight = document.querySelector(".dark-light");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
// const allLinks = document.querySelectorAll(".sidebar-link");

// allLinks.forEach((link) => {
//   if (window.location.href === link.href) {
//     link.classList.add("link-active");
//   }
//   link.addEventListener("click", (e) => {
//     allLinks.forEach((item) => {
//       if (
//         e.target.getAttribute("data-link") !== item.getAttribute("data-link")
//       ) {
//         item.classList.remove("link-active");
//       }
//     });

//     link.classList.add("link-active");
//   });
// });

//sidebar toggle js.
hamburger.addEventListener("click", () => {
  sidebar.classList.add("ham-active");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("ham-active");
});

// dark light mode js below

const enableDark = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark", "enabled");
  darkLight.classList.add("active");
};

const disableDark = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark", null);
  darkLight.classList.remove("active");
};

if (dark === "enabled") {
  enableDark();
}
darkLight.addEventListener("click", () => {
  dark = localStorage.getItem("dark");

  if (dark !== "enabled") {
    enableDark();
    console.log(dark);
  } else {
    disableDark();
  }
});
