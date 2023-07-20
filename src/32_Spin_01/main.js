const meyveler = ["🍓", "🍏", "🍇", "🍉","🍊","🥑","🍋"];
let span = document.querySelectorAll("span");
let div = document.getElementById("msg");
let btnSpin = document.querySelector("button");

btnSpin.addEventListener("click",()=>{
   btnSpin.disabled= true;
    div.innerHTML="Spinning...";
    for(let i=0;i<span.length;i++){
      span[i].innerHTML="";
    }
  
  setTimeout(() => {  
    
      span[0].innerHTML =   meyveler[Math.floor(Math.random() * meyveler.length)];  
    
     }, 1000);
  setTimeout(() => { 
    
      span[1].innerHTML =   meyveler[Math.floor(Math.random() * meyveler.length)];
    
     }, 2000);
  setTimeout(() => {
  
     span[2].innerHTML =   meyveler[Math.floor(Math.random() * meyveler.length)];
    
     }, 3000);
  
     setTimeout(() => {
       
          if (span[0].innerHTML == span[1].innerHTML ) {
             if (span[0].innerHTML == span[2].innerHTML){
               if (span[1].innerHTML == span[2].innerHTML){  
                    div.innerHTML = "Jackpot" ;
                }    
              } 
          }else{
             div.innerHTML = "Try Again";
               }
       btnSpin.disabled= false;
        }, 3000);  
});