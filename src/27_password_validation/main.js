let password = document.getElementById("pass");
let circleArr = document.querySelectorAll("div");

 


password.addEventListener("input",()=>{
  
      let veri = password.value; 
			let uzunluk = veri.length;
      circleArr.forEach((circle, index) => {
        if (index != 0) {
          circle.innerHTML ="🔵"
        }
      });
		
      for(var i = 1; veri.length>=i; i++)
        {
          var a	= veri[uzunluk-i];
          
            if(a>='a' && a<='z')
            {
            circleArr[1].innerHTML="🟢";
            }       
            if(a>='A' && a<='Z')
            {
            circleArr[2].innerHTML="🟢";
            }         
            if(a>='0' && a<='9')
            {
            circleArr[3].innerHTML="🟢";
            }                    
          }
            if(uzunluk>=8)
            {
              circleArr[4].innerHTML="🟢";
            }
  
            
      });
		    
  
   
  
     
