let btn = document.querySelector("button");
let content = document.querySelector("div");

let isHidden = true;

btn.addEventListener("click", () => {
   if (isHidden) {
  content.classList.remove("hidden");
  } else {    
  content.classList.add("hidden");
  }
   isHidden = !isHidden;
});