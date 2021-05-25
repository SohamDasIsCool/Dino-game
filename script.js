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
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "swipe infinite linear 1s";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML ="Your score:"+Math.floor(counter/100);
    }
    if(counter=1000 || counter> 1000){
        x="true";
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