let step = 3;// 1, 2, 3 
let circleArr = document.querySelectorAll(".circle");
let lineArr = document.querySelectorAll(".line");

// Step kadar loop yap
for (let i=0; i < step; i++) {
  // i indexinde circle'a filled class ekle
  circleArr[i].classList.add("filled");
  
  // step'in bir öncesi line'a filled class ekle
  if (i>0) {
    lineArr[i-1].classList.add("filled");
  }  
};
