let inputAdd = document.querySelector("input");
let btnAdd = document.getElementById("btnAdd");
let ul = document.querySelector("ul");
let count = 0;

btnAdd.addEventListener("click",() =>{
  
  let li = document.createElement("li");
  let span = document.createElement("span");
  let btnDraw = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnEdit = document.createElement("button");
  btnEdit.textContent="✏️";
  span.textContent =inputAdd.value;
  ul.append(li);
  li.append(span);
  li.append(btnDraw);
  li.append(btnDelete);
  li.append(btnEdit);
  btnDraw.textContent= "✅";
  btnDelete.textContent = "🗑️"; 
  inputAdd.value = "";
  
  count++;
  let index=count;
  
  
  btnDraw.addEventListener("click",()=>{
    span.classList.toggle("line");  
  });
  
  btnDelete.addEventListener("click",()=>{
    li.remove();
    span.classList.remove("line");
  });
  let isEditMode = true;
  let inputEdit;
   btnEdit.addEventListener("click",()=>{
     if(isEditMode){
        btnEdit.textContent = "💾"; 
        inputEdit = document.createElement("input");
        inputEdit.value = span.textContent;
        span.textContent = "";
        li.insertBefore(inputEdit,li.firstChild);
        btnDraw.disabled = true;
     }else{
       btnEdit.textContent = "✏️" ;
       span.textContent = inputEdit.value;
       inputEdit.remove();
       btnDraw.disabled = false;
     }
     isEditMode = !isEditMode;
    });
});


