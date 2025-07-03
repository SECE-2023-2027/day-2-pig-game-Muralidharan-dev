const againbtn= document.querySelector(".again");
const checkbtn= document.querySelector(".check");
const message= document.querySelector(".message");
const score= document.querySelector(".score");
const highscore= document.querySelector(".highscore");
const guess=document.querySelector(".guess");

let random=Math.trunc(Math.random()*20)+1;
console.log(random);
let scores=20;
function checkfunc(){
  const guesss=guess.value;
  console.log(guesss);
  console.log("socres",scores);
  if(scores<=1){
    
    message.content="You lost the game!";
    const guesinp=document.getElementsByClassName("guess");
    const guesbtn=document.querySelector("btn check");
    guesinp.remove();
    guesbtn.remove();
    return;
  }
  if(!guesss){
message.textContent=" No number!";
  }
  else if(guesss==random){
    
    message.textContent="Correct Number!";
    document.body.style.backgroundColor="#60b347";
    highscore.textContent=scores;
  }
  else if(guesss>random){
    if(scores>1){
        message.textContent="Too high!";
        document.body.style.backgroundColor="#ff0000";
        scores--;           

    }
  }
  else if(guesss<random){
    if(scores>1){
message.textContent="Too low!";
document.body.style.backgroundColor="#ff0000";      
scores--;   
    }
  }

}

