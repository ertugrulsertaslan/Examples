let [d1, d2, d3, d4, d5, d6, d7] = document.querySelectorAll("div");

// innerHTML

// Sona ekleme
d1.innerHTML += "🍎";

// HTML render yapma
d2.innerHTML = `<a href="#">Link</a>`;


// textContent
// textContent render yapmıyor
d3.textContent = `<a href="#">Link</a>`;

// innerText
// innerText standart dışı
console.log("d4.textContent", d4.textContent);
console.log("d4.innerText", d4.innerText);


// createElement
let span = document.createElement("span");
span.textContent = "ert";
d5.appendChild(span);