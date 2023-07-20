let numbers = document.querySelectorAll("input");
let btn = document.querySelector("button");
let result = document.querySelector("span");

btn.addEventListener("click", () => {
  result.innerHTML = Number(numbers[0].value) + Number(numbers[1].value);
});

