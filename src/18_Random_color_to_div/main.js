let div = document.querySelector("div");

let num1 = Math.floor(Math.random() * 255) + 1;
let num2 = Math.floor(Math.random() * 255) + 1;
let num3 = Math.floor(Math.random() * 255) + 1;

let random = `rgb(${num1},${num2},${num3})`;

div.style.backgroundColor = `${random}`;

