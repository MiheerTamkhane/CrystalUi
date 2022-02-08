const modalBtn = document.querySelector("#modal-btn");
const ctModal = document.querySelector("#ct-modal");
const ctModalParent = document.querySelector(".ct-modal-dialog");
const modalClose = document.querySelector(".ct-modal-close");

modalBtn.addEventListener("click", () => {
  ctModal.classList.add("ct-modal-active");
  ctModalParent.classList.add("ct-dialog-active");
});

modalClose.addEventListener("click", () => {
  ctModal.classList.remove("ct-modal-active");
  ctModalParent.classList.remove("ct-dialog-active");
});
