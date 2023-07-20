// div'i select yaptım.js'de kullanmak için tanımladığım clock adındaki değişkene atadım.
let clock = document.getElementById("clock");
// date objesinden her saniye verileri alabilmek için her 1000ms çalışıcak setInterval fonksiyonunu tanımladım.
setInterval(() => {
  // Date objesinden güncel saat,dakika ve saniyeyi alabilmek içini initializer'ı boş bırakıp tanımladığım değişkenler içerisine atadım.
  const d = new Date();
  let hour = d.getHours(); 
  let minute = d.getMinutes();  
  let second = d.getSeconds();
  
  //div içerisine saati,dakikayı ve saniyeyi yazdırmak için number türündeki değişkenleri stringe çevirip clock elemenetinin içine yazdırdım.
//  clock.innerHTML = String(hour) +":"+ String(minute) +":"+ String(second);
  clock.innerHTML = `${hour}:${minute}:${second}`;
  
}, 1000);
