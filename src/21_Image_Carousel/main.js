let imageList = [
    "https://picsum.photos/id/28/300",
    "https://picsum.photos/id/57/300",
    "https://picsum.photos/id/16/300",
    "https://picsum.photos/id/237/300",
    "https://picsum.photos/id/99/300",
  ];
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");
  let images = document.querySelector("img");
  let index=0;
  
  nextBtn.addEventListener("click",() => {
    if(imageList.length>index){
        index++;
        images.src = imageList[index];
    }else{
        index=0;
        images.src = imageList[index]; 
    }
  });
  prevBtn.addEventListener("click",() => {
    if(imageList.length>index && index>0){
        index--;
        images.src = imageList[index];
    } else {
      index=4;
      images.src = imageList[index];
      index--;
    }
  });