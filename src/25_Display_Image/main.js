let image_input = document.querySelector("#image_input");
image_input.addEventListener("change",function(){
  const reader = new FileReader();
  reader.addEventListener("load",()=>{
    document.querySelector("img").src= reader.result;
    
  });
  reader.readAsDataURL(this.files[0]);
})
