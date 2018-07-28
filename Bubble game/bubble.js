var score = document.getElementById("score");
var play = document.getElementById("btn");
var gameover = document.getElementById("gameover");
var sec = 500;


play.addEventListener("click", function(){
   play.style.display = "none";
   gameover.style.display = "none";
   score = document.getElementById("score").innerHTML = 0;
    var myinterval = setInterval(function(){
    var left=randomIntFromInterval(120,1000);
    var top=randomIntFromInterval(120,550);
    var x=document.createElement("div");
    x.style.position="absolute";
    x.className="bubble";
    x.style.left=left+"px";
    x.style.top=top+"px";
    x.style.transform="translate(-50%, -50%)"
    var main =  document.querySelector("#main");
    main.appendChild(x);
    var list=main.childElementCount;
    document.querySelector("#bubblecount").innerHTML=list-4
    
    if(list >= 12){
      clearInterval(myinterval);
      var bubles=document.querySelectorAll("#main div");
      for(var buble of bubles){
          buble.remove();
      }
      play.style.display = "block";
      gameover.style.display = "block";

      
    }
    
    x.addEventListener("click", function(){
        score = document.getElementById("score").innerHTML = score + 1;;
        
    x.remove();
 
    });
    
 
 

 }, sec);
})


 function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}