let list = ["A","C","F","B","D","H","G","E"];
let ul = document.querySelector("ul");
let select = document.querySelector("select");
let optionArr = document.querySelectorAll("option");

for(let i=0;i<list.length;i++){
       if(list[i]){
          let li = document.createElement("li");
          li.textContent = list[i];
          ul.append(li); 
      }
     }
    
    


select.addEventListener("change",()=>{
  
  if(select.selectedIndex==1){
   ul.innerHTML="";
     for(let i=0;i<list.length;i++){
       
       if(list[i]){
          list.sort();
          let li = document.createElement("li");
          li.textContent = list[i];
          ul.append(li); 
      }
     }
  }
  else if (select.selectedIndex==2){
    ul.innerHTML="";
     for(let i=0;i<list.length;i++){
       if(list[i]){
           list.sort();
           list.reverse();
          let li = document.createElement("li");
          li.textContent = list[i];
          ul.append(li); 
      }
     }
    
  }
});
 



