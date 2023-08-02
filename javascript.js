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
    if(computer==player){
        console.log("tie game!");
    }
    else if(((computer+1)%3)==player){
        playerWins++;
        console.log("Player Wins! And has won "+playerWins+" times. ");
    }
    else if(((computer-1)%3)==player){
        computerWins++;
        console.log("Computer wins! And has won "+computerWins+" times. ");
    }
}
 
 function playRound(playerChoice){
    //let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice(); 
    console.log("you chose: "+choice[playerChoice]);
    console.log("the computer chose: "+choice[computerChoice]);
    judge(computerChoice, playerChoice);
 }
 
 const buttons = document.querySelectorAll('button');
 buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playRound(parseInt(button.id));
    });
  });