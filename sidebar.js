const allLinks = document.querySelectorAll(".sidebar-link");

allLinks.forEach((link) => {
  if (window.location.href === link.href) {
    link.classList.add("link-active");
  }
  link.addEventListener("click", (e) => {
    allLinks.forEach((item) => {
      if (
        e.target.getAttribute("data-link") !== item.getAttribute("data-link")
      ) {
        item.classList.remove("link-active");
      }
    });

    link.classList.add("link-active");
  });
});
