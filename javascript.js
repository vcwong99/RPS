const choice = ["rock", "paper", "scissors"];
let playerWins=0, computerWins=0;
let keepPlaying=true;



function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice(){
    let input=prompt("Rock, Paper or Scissors?");
    input = input.toLowerCase();
    return (input=="rock")?0:
        (input=="paper")?1:
        (input=="scissors")?2:
        3;
}

function judge(computer, player){
    let computerChoice = getComputerChoice(); 
    const result=document.getElementById("result");
    if(computer==player){
        result.textContent="tie game!";
    }
    else if(((computer+1)%3)==player){
        playerWins++;
        result.textContent="Player Wins! And has won "+playerWins+" times. ";
    }
    else if(((computer-1)%3)==player){
        computerWins++;
        result.textContent="Computer wins! And has won "+computerWins+" times. ";
    }
}
 
 function playRound(playerChoice){
    console.log(playerChoice);
    if(keepPlaying){
        let computerChoice = getComputerChoice(); 
        const roundDescription= document.getElementById("round");
        roundDescription.textContent="Player chose "+choice[playerChoice]+" the computer chose "+choice[computerChoice];
        judge(computerChoice, playerChoice);
        updateScore();
    }
 }
 function checkForWinner(){
    const winnerAnnouncer= document.getElementById("winner");
    if(playerWins==5||computerWins==5){
        winnerAnnouncer.textContent=playerWins==5? "Player has reached 5 and has won!":"Computer has reached 5 and has won!";
        keepPlaying=false;
    }
   
 }

 function updateScore(){
    const playerScore=document.getElementById("player");
    const computerScore=document.getElementById("computer");
  
    playerScore.textContent="Player: "+playerWins;
    computerScore.textContent="Computer: "+computerWins;
    checkForWinner();
 }

 function reset(){
    const result=document.getElementById("result");
    const roundDescription= document.getElementById("round");
    const winnerAnnouncer= document.getElementById("winner");
    winnerAnnouncer.textContent="";
    result.textContent="";
    roundDescription.textContent="";
    playerWins=0;
    computerWins=0;
    updateScore();
 }
 
 updateScore();
 const buttons = document.querySelectorAll('.choice');
 buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click',()=>{
    playRound(parseInt(button.id));
    });
  });
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', reset);
