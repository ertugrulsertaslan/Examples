let ul = document.querySelector("ul");
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();
  ul.innerHTML="Loading...";
Http.onload =()=>{
  ul.innerHTML="";
    const data = JSON.parse(Http.response);
    
  for(let i=0;i<10;i++){
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    ul.appendChild(li);
    li.append(h4,p);

    h4.innerHTML = `${data[i].title}`;
    p.innerHTML =`${data[i].body}`;
    
  }
    
    

  
  
}

 
