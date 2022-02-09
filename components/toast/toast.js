const toastBtn = document.querySelector("#ct-toast-btn");
const toast = document.querySelector(".ct-toast-action");
const undoBtn = document.querySelector("#ct-undo");
toastBtn.addEventListener("click", () => {
  toast.classList.add("ct-toast-active");
});

undoBtn.addEventListener("click", () => {
  toast.classList.remove("ct-toast-active");
});
