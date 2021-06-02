dino=document.getElementById("dino");
cactus=document.getElementById("cactus");
counter=0;
sound="";
function preload(){
    sound=loadSound("sound.mp3");
}
x="false";
function jump(){
    dino.classList.add("jump");
    document.getElementById("dino").src = "dino.PNG";
    setTimeout(function(){
        dino.classList.remove("jump");
    },500);
    document.getElementById("dino").src = "Webp.net-gifmaker.gif";
}
function bom(){
x="true";
document.getElementById("boop").innerHTML="SUPER JUMP ACTIVATED";
sound.play();
}
function glide(){
    if(x=="false"){
    }
    else{
    dino.classList.add("glide");
    setTimeout(function(){
        dino.classList.remove("glide");
    },1500);
}
}
var isAlive=setInterval(function() {
    dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusleft<40 && cactusleft>0 && dinoTop>=140){
        cactus.style.animation = "none";
        document.getElementById("dino").src = "dino.PNG";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "swipe infinite linear 1s";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML ="Your score:"+Math.floor(counter/100);
    }
},10);
setInterval(
    function(){
        x=Math.floor(Math.random()*2);
if(x==0){
  document.getElementById("cactus").src = "cactus.png";
  }
  else{
  document.getElementById("cactus").src = "tr.png";
  }
  r=Math.floor(Math.random()*3);
        if(r==0){
        cactus.style.animation ="swipe infinite linear 1s";
           }
        if(r==1){
            cactus.style.animation ="swipe infinite linear 0.95s";
        }
        else{
            cactus.style.animation ="swipe infinite linear 1.05s";
        }
    },1000
);
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        jump();
    }
    if(e.keyCode == 16){
        glide();
    }
}