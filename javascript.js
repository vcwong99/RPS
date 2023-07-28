const choice = ["rock", "paper", "scissors"];
let keepPlaying=true;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function judge(computer, player){
    if(choice[computer]==player){
        console.log("tie game!");
    }
    else if(choice[(computer+1)%3]==player){
        console.log("Player Wins!");
    }
    else if(choice[(computer-1)%3]==[player]){
        console.log("Computer wins!");
    }

    
}
 
 while(keepPlaying){
    let playerChoice = prompt("Rock, Paper or Scissors?");
    let computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();
    console.log("you chose: "+playerChoice);
    console.log("the computer chose: "+choice[computerChoice]);
    judge(computerChoice, playerChoice);
    //keepPlaying = prompt("Rock, Paper or Scissors?") ? 
 }