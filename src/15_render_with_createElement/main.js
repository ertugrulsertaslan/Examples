/*
<div>
  <span>!</span>
  <ul>
    <li>😀</li>
    <li>😂</li>
  </ul>
  <button>Click</button>
</div>
*/
let div = document.querySelector("div"); 

let span = document.createElement("span");
span.textContent = "!";
let ul = document.createElement("ul");
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let btn = document.createElement("button");
let h4 = document.createElement("h4");

h4.textContent="asdds";
l1.textContent ="😀";
l2.textContent ="😁";
btn.textContent="Click";

div.appendChild(span);
div.appendChild(ul);
div.appendChild(h4);
ul.append(l1,l2);
div.appendChild(btn);

