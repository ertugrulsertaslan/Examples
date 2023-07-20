let inputRange = document.querySelector("input");
let box = document.querySelector("div");

inputRange.addEventListener("input",()=>{
  
  let deger = inputRange.value / 2;
  box.style.borderRadius= deger+"px";

});