//buttonları select yaptım. js'de kullanabilmek için tanımladığım değişkenlere atadım
let like = document.getElementById("like");
let dislike = document.getElementById("dislike");
 // 3 farklı durum oluşucağı için her durum için farklı sabit bir değer atadım.
const EMPTY = 0;
const LIKED = 1;
const DISLIKED = 2;

// durumu değiştirebilmek için bir değişken tanımladım ve içerisine ilk durumunu atadım.
let state = EMPTY;

// like buttonu'na click event listener ekledim.
like.addEventListener("click", () => {
  
  // fonksiyon içerisinde if ile durumu liked ise içerisini boş durumuna getirdim ve green class'ını çıkarttım
  if (state == LIKED) {
    state = EMPTY;
    like.classList.remove("green");
  } else {
    //durumu liked değil ise durumuna liked atayıp
    // like buttonu'na green class'ı ekledim ve dislike           // buttonu'nun red classını çıkardım.
    state = LIKED;
    like.classList.add("green");
    dislike.classList.remove("red");
  }
});
 
// dislike buttonu'na click event listener ekledim.
dislike.addEventListener("click", () => {
   // fonksiyon içerisinde if ile durumu disliked ise içerisini boş durumuna getirdim ve red class'ını çıkarttım
  if (state == DISLIKED) {
    state = EMPTY;
    dislike.classList.remove("red"); 
  } else {
    //durumu disliked değil ise durumuna disliked atayıp
    // dislike buttonu'na red class'ı ekledim ve like           // buttonu'nun green classını çıkardım.
    state = DISLIKED;
     dislike.classList.add("red");
    like.classList.remove("green");
  }
});