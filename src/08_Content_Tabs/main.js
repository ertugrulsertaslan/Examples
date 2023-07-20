// Tüm Butonları select yaptım
let buttonArr = document.querySelectorAll("button");
// Tüm Divleri select yaptım
let contentArr = document.querySelectorAll("div");

// Foreachle her buttona event listener ekledim
buttonArr.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Her eventte buttonun indexine karşılık gelen div'den hidden classı çıkarttım
    // Index karşılık gelmeyenlere hidden class ekledim
    contentArr.forEach((content, j) => {
      if (i == j) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
});