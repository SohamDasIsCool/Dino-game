dino=document.getElementById("dino");
cactus=document.getElementById("cactus");
counter=0;
x="false";
function jump(){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump")
    },500);
}
function bom(){
x="true";
document.getElementById("boop").innerHTML="SUPER JUMP ACTIVATED";
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
setInterval(function(){
    cool= /\d+/g;
    y=document.getElementById("scoreSpan").innerHTML ="Your score:"+Math.floor(counter/100);
},1000);
var isAlive=setInterval(function() {
    dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusleft<40 && cactusleft>0 && dinoTop>=150){
        cactus.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "swipe infinite linear 1s";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML ="Your score:"+Math.floor(counter/100);
    }
},10);
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        jump();
    }
    if(e.keyCode == 16){
        glide();
    }
}
