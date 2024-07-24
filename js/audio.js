siteLogo = document.getElementById ("site-logo-id");
conrol0 = document.getElementById ("control0");
conrol1 = document.getElementById ("control1");
conrol2 = document.getElementById ("control2");
conrol3 = document.getElementById ("control3");
conrol4 = document.getElementById ("control4");
conrol5 = document.getElementById ("control5");
audioElement = document.getElementById ("titanic-audio");
audioElement1 = document.getElementById ("just-the-2-of-us-audio");
audioElement2 = document.getElementById ("only-you-audio");
audioElement3 = document.getElementById ("fly-me-to-the-moon-audio");
audioElement4 = document.getElementById ("happy-birthday-audio");
audioElement5 = document.getElementById ("catch-the-rabbit-audio");

function playAudioTitanic(){
  audioElement.play();
  audioElement1.pause();
  audioElement2.pause();
  audioElement3.pause();
  audioElement4.pause();
  audioElement5.pause();
}
function playAudioJustThe2OfUs(){
  audioElement.pause();
  audioElement1.play();
  audioElement2.pause();
  audioElement3.pause();
  audioElement4.pause();
  audioElement5.pause();
}
function playAudioOnlyYou(){
  audioElement.pause();
  audioElement1.pause();
  audioElement2.play();
  audioElement3.pause();
  audioElement4.pause();
  audioElement5.pause();
}
function playAudioFlyMeToTheMoon(){
  audioElement.pause();
  audioElement1.pause();
  audioElement2.pause();
  audioElement3.play();
  audioElement4.pause();
  audioElement5.pause();
}
function playAudioHappyBirthday(){
  audioElement.pause();
  audioElement1.pause();
  audioElement2.pause();
  audioElement3.pause();
  audioElement4.play();
  audioElement5.pause();
}
function playAudioCatchTheRabbit(){
  audioElement.pause();
  audioElement1.pause();
  audioElement2.pause();
  audioElement3.pause();
  audioElement4.pause();
  audioElement5.play();
}


siteLogo.addEventListener('click',playAudioTitanic);
conrol0.addEventListener('click',playAudioTitanic);
conrol1.addEventListener('click',playAudioJustThe2OfUs);
conrol2.addEventListener('click',playAudioOnlyYou);
conrol3.addEventListener('click',playAudioHappyBirthday);
conrol4.addEventListener('click',playAudioFlyMeToTheMoon);
conrol5.addEventListener('click',playAudioCatchTheRabbit);
