// requirements: 
// 1. initially stars are black
// 2. when user hovers Nth star, make all stars light yellow till nth star
// 3. when user leaves a star, make all stars black & remake stars dark yellow till selected inex
// 4. when user clicks Nth star, make all stars dark yellow till nth star & save star index as selected


let state = {
    selectedStar: 2,
    hoverStar: 4,  
    
    arr: ['x','y']
  };
  
  let starArr = document.querySelectorAll("span");
  
  function render(state) {
    
    starArr.forEach((star, index)=>{
      // reset
      star.classList.remove('empty');
      star.classList.remove('selected');
      star.classList.remove('hover');
      
      // handle state
      
      if (index <= state.hoverStar) {
        star.classList.add('hover');
      } else if (index <= state.selectedStar) {
        star.classList.add('selected');
      } else {
        star.classList.add('empty');
      }
      
      
    });
  }
  render(state);
  
  starArr.forEach((hoverStar, hoverIndex)=>{
    hoverStar.addEventListener('mouseover', ()=>{
      state = {
        selectedStar: state.selectedStar,
        hoverStar: hoverIndex
      };
      render(state);
    })
  });
  
  
  starArr.forEach((leaveStar, leaveIndex)=>{
    leaveStar.addEventListener('mouseleave', ()=>{
      state = {
        selectedStar: state.selectedStar,
        hoverStar: -1
      };
      render(state);
    })
  });
  
  starArr.forEach((clickStar, clickIndex)=>{
    clickStar.addEventListener('click', ()=>{
      state = {
        selectedStar: clickIndex,
        hoverStar: state.hoverStar
      };
      render(state);
    })
  });
  
  
  
  
  