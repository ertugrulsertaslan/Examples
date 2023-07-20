let inches = document.getElementById("in");
let centimeters = document.getElementById("cm");
let num = 0 ;
inches.addEventListener("input",()=>{
     centimeters.value = inches.value * 2.54 ;
});

centimeters.addEventListener("input",()=>{
  inches.value = centimeters.value * 0.39370079 ;
});
