let userScore=0;
let compScore=0;
 
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");
let playAgain=document.querySelector(".playAgain");


const disabled=()=>{
    for(let val of choices){
        val.classList.add("disabled");
    }
}

const enabled=()=>{
   
    for(let val of choices){
        val.classList.remove("disabled");
    }
}

const output=()=>{
    if(userScore==5){
     msg.innerText="You beats the Computer";
     playAgain.classList.remove("hide");
     disabled();

    }
    else if(compScore==5){

    msg.innerText="Computer beats You";
     playAgain.classList.remove("hide");
       disabled();
    }

}

const matchDraw=(userChoice,compChoice)=>{
  msg.innerText=`Match Draw ! Both Choose ${userChoice}`;
  msg.style.backgroundColor="blue";
}

showWinner=(turn, userChoice, compChoice)=>{
    if(turn){
        userScore++;
        uScore.innerText=`${userScore}`;
        msg.innerText=`Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cScore.innerText=`${compScore}`;
        msg.innerText=`${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

    output();
    
}



const cChoice=(userChoice)=>{
   let arr=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
   let compChoice= arr[idx];
   let turn=true;
    
   if(userChoice===compChoice){
    matchDraw(userChoice,compChoice);
   }
   else{
    if(userChoice==="rock"){
        //paper scissor
      turn=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock scissor
       turn=compChoice==="scissors"?false:true;
    }else{
        //rock,paper
      turn= compChoice==="rock"?false:true;
    }
     showWinner(turn, userChoice,compChoice);
   }

  
}

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
     let userChoice=choice.getAttribute("id");
     
     cChoice(userChoice);
   })
})


playAgain.addEventListener("click",()=>{
    compScore=0;
    userScore=0;
  uScore.innerText="0";
  cScore.innerText="0";
  playAgain.classList.add("hide");
  msg.innerText="Play Your Move";
  msg.style.backgroundColor="#081b31";
   enabled();
  
})
