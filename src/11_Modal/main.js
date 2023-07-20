let btnOpen = document.getElementById("btn_open");
let btnClose = document.getElementById("btn_close");
let modal = document.querySelector(".modal-bg");

btnClose.addEventListener("click", ()=> {
  modal.classList.add("hidden");
});

btnOpen.addEventListener("click", ()=> {
  modal.classList.remove("hidden");
});
