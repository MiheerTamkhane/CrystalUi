const ctRating = document.querySelector(".ct-rating");
const ctStar = document.querySelectorAll(".ct-star");

ctStar.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    e.preventDefault();
    ctRating.classList.add("disabled");

    ctStar.forEach((newStar, newIndex) => {
      if (newIndex <= index) {
        newStar.classList.add("active");
      }
    });
  });
});
