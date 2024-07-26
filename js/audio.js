siteLogo = document.getElementById ("site-logo-id");
control0 = document.getElementById ("control0");
control1 = document.getElementById ("control1");
control2 = document.getElementById ("control2");
control3 = document.getElementById ("control3");
control4 = document.getElementById ("control4");
control5 = document.getElementById ("control5");
audioElement = document.getElementById ("titanic-audio");
audioElement1 = document.getElementById ("just-the-2-of-us-audio");
audioElement2 = document.getElementById ("only-you-audio");
audioElement3 = document.getElementById ("fly-me-to-the-moon-audio");
audioElement4 = document.getElementById ("happy-birthday-audio");
audioElement5 = document.getElementById ("catch-the-rabbit-audio");
audioElementControls = document.getElementById ("titanic-controls");
audioElement1Controls = document.getElementById ("just-the-2-of-us-controls");
audioElement2Controls = document.getElementById ("only-you-controls");
audioElement3Controls = document.getElementById ("fly-me-to-the-moon-controls");
audioElement4Controls = document.getElementById ("happy-birthday-controls");
audioElement5Controls = document.getElementById ("catch-the-rabbit-controls");

function playAudioTitanic(){
  audioElement.play();
  audioElement1.pause();
  audioElement1.currentTime = 0;
  audioElement2.pause();
  audioElement2.currentTime = 0;
  audioElement3.pause();
  audioElement3.currentTime = 0;
  audioElement4.pause();
  audioElement4.currentTime = 0;
  audioElement5.pause();
  audioElement5.currentTime = 0;
  audioElementControls.style.display = "flex";
  audioElement1Controls.style.display = "none";
  audioElement2Controls.style.display = "none";
  audioElement3Controls.style.display = "none";
  audioElement4Controls.style.display = "none";
  audioElement5Controls.style.display = "none";
}
function playAudioJustThe2OfUs(){
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement1.play();
  audioElement2.pause();
  audioElement2.currentTime = 0;
  audioElement3.pause();
  audioElement3.currentTime = 0;
  audioElement4.pause();
  audioElement4.currentTime = 0;
  audioElement5.pause();
  audioElement5.currentTime = 0;
  audioElementControls.style.display = "none";
  audioElement1Controls.style.display = "flex";
  audioElement2Controls.style.display = "none";
  audioElement3Controls.style.display = "none";
  audioElement4Controls.style.display = "none";
  audioElement5Controls.style.display = "none";
}
function playAudioOnlyYou(){
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement1.pause();
  audioElement1.currentTime = 0;
  audioElement2.play();
  audioElement3.pause();
  audioElement3.currentTime = 0;
  audioElement4.pause();
  audioElement4.currentTime = 0;
  audioElement5.pause();
  audioElement5.currentTime = 0;
  audioElementControls.style.display = "none";
  audioElement1Controls.style.display = "none";
  audioElement2Controls.style.display = "flex";
  audioElement3Controls.style.display = "none";
  audioElement4Controls.style.display = "none";
  audioElement5Controls.style.display = "none";
}
function playAudioFlyMeToTheMoon(){
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement1.pause();
  audioElement1.currentTime = 0;
  audioElement2.pause();
  audioElement2.currentTime = 0;
  audioElement3.play();
  audioElement4.pause();
  audioElement4.currentTime = 0;
  audioElement5.pause();
  audioElement5.currentTime = 0;
  audioElementControls.style.display = "none";
  audioElement1Controls.style.display = "none";
  audioElement2Controls.style.display = "none";
  audioElement3Controls.style.display = "flex";
  audioElement4Controls.style.display = "none";
  audioElement5Controls.style.display = "none";
}
function playAudioHappyBirthday(){
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement1.pause();
  audioElement1.currentTime = 0;
  audioElement2.pause();
  audioElement2.currentTime = 0;
  audioElement3.pause();
  audioElement3.currentTime = 0;
  audioElement4.play();
  audioElement5.pause();
  audioElement5.currentTime = 0;
  audioElementControls.style.display = "none";
  audioElement1Controls.style.display = "none";
  audioElement2Controls.style.display = "none";
  audioElement3Controls.style.display = "none";
  audioElement4Controls.style.display = "flex";
  audioElement5Controls.style.display = "none";
}
function playAudioCatchTheRabbit(){
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement1.pause();
  audioElement1.currentTime = 0;
  audioElement2.pause();
  audioElement2.currentTime = 0;
  audioElement3.pause();
  audioElement3.currentTime = 0;
  audioElement4.pause();
  audioElement4.currentTime = 0;
  audioElement5.play();
  audioElementControls.style.display = "none";
  audioElement1Controls.style.display = "none";
  audioElement2Controls.style.display = "none";
  audioElement3Controls.style.display = "none";
  audioElement4Controls.style.display = "none";
  audioElement5Controls.style.display = "flex";
}


siteLogo.addEventListener('click',playAudioTitanic);
control0.addEventListener('click',playAudioTitanic);
control1.addEventListener('click',playAudioJustThe2OfUs);
control2.addEventListener('click',playAudioOnlyYou);
control3.addEventListener('click',playAudioHappyBirthday);
control4.addEventListener('click',playAudioFlyMeToTheMoon);
control5.addEventListener('click',playAudioCatchTheRabbit);
