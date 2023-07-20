let box = document.getElementsByClassName("box")[0];

let isDisabled = false;

setInterval(() => {
  if (isDisabled) {
    //   Remove Class
  box.classList.remove("disabled");
  } else {
    //   Add Class
  box.classList.add("disabled");
  }
  
  isDisabled = !isDisabled;

}, 1500);




