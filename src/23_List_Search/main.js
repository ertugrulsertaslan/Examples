let listArr = ["Eto","James","bRad","Michael","Hamilton","joseph"];
let btnSearch = document.getElementById("btnSearch");
let inputSearch = document.querySelector("input");
let ul = document.querySelector("ul");

function searchInList(searchTerm) {
  ul.textContent="";   
    for(let i=0;i<listArr.length;i++){
       if(listArr[i].toLowerCase().includes(searchTerm.toLowerCase())){

          let li = document.createElement("li");
          let span = document.createElement("span");
          span.textContent = listArr[i];
          ul.append(li);
          li.append(span);      
      }
  }
}
inputSearch.addEventListener("input",(e)=>{
     searchInList(e.target.value);
});  

searchInList("");