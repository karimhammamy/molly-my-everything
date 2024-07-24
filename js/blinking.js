var a = window.matchMedia("(max-width: 479px)");
titanicLyrics = document.getElementsByClassName("titanic-lyrics");
function decreaseOpacity(){
  for(titanicLyricsIndex=0;titanicLyricsIndex<titanicLyrics.length;titanicLyricsIndex++){
    titanicLyrics[titanicLyricsIndex].style.opacity = 0.4;
    titanicLyrics[titanicLyricsIndex].style.transition = "1s";
  }
}
function increaseOpacity(){
  for(titanicLyricsIndex=0;titanicLyricsIndex<titanicLyrics.length;titanicLyricsIndex++){
    titanicLyrics[titanicLyricsIndex].style.opacity = 1;
    titanicLyrics[titanicLyricsIndex].style.transition = "1s";
  }
}
function blinking(){
  setTimeout(decreaseOpacity,0);
  setTimeout(increaseOpacity,1000);
}
function blinkingMediaQuery(){
  if(a.matches){
  
    setTimeout(decreaseOpacity,0);
    setTimeout(increaseOpacity,1000);
    setInterval(blinking,2000);
  }
}
window.addEventListener('load',blinkingMediaQuery);
window.addEventListener('resize',blinkingMediaQuery);

heartImg = document.getElementById("heart-img");

function decreaseSize(){
  heartImg.style.scale = 0.8;
  heartImg.style.transition = "0.5s";
}
function increaseSize(){
  heartImg.style.scale = 1;
  heartImg.style.transition = "0.5s";
}
function blinking1(){
  setTimeout(decreaseSize,0);
  setTimeout(increaseSize,500);
}
setTimeout(decreaseSize,0);
setTimeout(increaseSize,500);
setInterval(blinking1,1000);






  


