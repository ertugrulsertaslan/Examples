let clock = document.getElementById("clock");
let endDate = new Date("Jan 1, 2024 20:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();
  let t = endDate - now ;
        let gif = document.querySelector("iframe");
        if (t >= 0) {
        let day = Math.floor(t / (1000 * 60 * 60 * 24));
        let hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((t % (1000 * 60)) / 1000);
        clock.innerHTML = `${day+"gün"}:${hour+ "sa"}:${minute+"dk"}:${second+"sn"}`;
   
        }else {
          gif.style.visibility = "visible";
        }
      
  
}, 1000);