btn = document.getElementById("btn");
message = document.getElementById("message");
container = document.getElementById("container"); 

btn.addEventListener("click",()=>{
 let div = document.createElement("div");
  div.textContent = message.value;
  div.classList.add("bubble");
  container.appendChild(div);
  message.value="";
 // const element = document.getElementById("myDIV");
  container.scrollTop = 250;
});



message.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btn.click();
  }
});