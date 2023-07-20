// form elemanlarını select yaptım js'de kullanabilmek için bir değişken oluşturup içerisine atadım.
let toggle = document.getElementById("toggle");
let name = document.getElementById("name");
let male = document.getElementById("male");
let female = document.getElementById("female");

// disable durumunu tutmak için bir değişken oluşturdum.
let isDisabled = false;

// checkbox input'una change türünde bir event dinleyici ekledim 
toggle.addEventListener("change", () => {
 
  // Tanımladığım isDisabled değişkeninin değerini tersine çevirip içerisine atıyorum.
  isDisabled = !isDisabled;
  
  // fonksiyon içerisinde form elemanının disabled property'sini kapatıp açabilmek için
  // tanımladığım isDisabled değişkeninin değerini disabled property'sine atadım.
  name.disabled = isDisabled;
  male.disabled = isDisabled;
  female.disabled = isDisabled;
  
  
});