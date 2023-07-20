let buttonArr = document.querySelectorAll("button");
let value = document.querySelector("span");
let number = 0;

buttonArr[0].addEventListener("click",() =>{
  number--;
  value.innerHTML = String(number);
});

buttonArr[1].addEventListener("click",() =>{
  number++;
  value.innerHTML = String(number);
});