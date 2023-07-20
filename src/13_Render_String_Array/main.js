// ul içine li oluşturma 
// for ile string arr içerisindeki elemanları sırasıyla li içerisini yazdırma
let stringArr = [`🍎 Elma <a href="#">asad</a>`, "🍉 Karpuz", "🍌 Muz", "🍐 Armut", "🍓 Çilek"];
let ul = document.querySelector("ul");

for(let i=0 ; i<stringArr.length; i++){
  
  let li = document.createElement("li");
  li.textContent = stringArr[i];
  ul.appendChild(li);
  
  ul.innerHTML += `<li> ${stringArr[i]}</li>`;
};
