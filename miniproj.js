let gameseq=[];
let userseq=[];
let i=1;

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started== false){
    console.log("game started");
       started=true;
       levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++
    h2.innerText=`level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    console.log("level", level)
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
          h2.innerHTML=`game over! your score is <b>${level}</b> <br> press any key to start`;
          document.querySelector("body").style.backgroundColor="red";
          setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#31363F";
          },150)
          print();
          reset();
          
    }

}

 function btnPress(){
    //console.log(this);
    let btn= this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
 }
 let allBtns= document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0
 }
 function print(){
    console.log( `your ${i++} round score is ${level}`);
 }
    
    
