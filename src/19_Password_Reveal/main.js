let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click",() => {
   if(input.type=="text"){
     input.type = "password";
   }else{
     input.type ="text";
   }
         
  
                     });