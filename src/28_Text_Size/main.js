let inputRange = document.querySelector("input");
let text = document.querySelector("h2");
let divArr = document.querySelectorAll("div"); 

inputRange.addEventListener("input",()=>{
  let deger = inputRange.value  ;   
  if(deger>20){
      text.style.fontSize = deger+"px";
  }
});
divArr[1].addEventListener("click",()=>{
   text.style.color = "#FFFF00";
   
   for(let i=0;i<divArr.length;i++){
      divArr[i].style.border = "";
   }
   divArr[1].style.border = "thick solid #FFFF00";
});

divArr[2].addEventListener("click",()=>{
  text.style.color = "#FFA500";
   for(let i=0;i<divArr.length;i++){
      divArr[i].style.border = "";
   }
  divArr[2].style.border = "thick solid #FFA500";
});

divArr[3].addEventListener("click",()=>{
  text.style.color = "#8A2BE2";
   for(let i=0;i<divArr.length;i++){
      divArr[i].style.border = "";
   }
  divArr[3].style.border = "thick solid #8A2BE2";
});

divArr[4].addEventListener("click",()=>{
  text.style.color = "#1E90FF";
   for(let i=0;i<divArr.length;i++){
      divArr[i].style.border = "";
   }
  divArr[4].style.border = "thick solid #1E90FF ";
});

divArr[5].addEventListener("click",()=>{
    text.style.color = "#7FFF00";
   for(let i=0;i<divArr.length;i++){
      divArr[i].style.border = "";
   }
   divArr[5].style.border = "thick solid #7FFF00";
});