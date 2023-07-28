const choice = ["rock", "paper", "scissors"];
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
    if(choice[computer]==player){
        console.log("tie game!");
    }
    else if(((computer+1)%3)==player){
        console.log("Player Wins!");
    }
    else if(((computer-1)%3)==player){
        console.log("Computer wins!");
    }

    
}
 
 while(keepPlaying){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice(); 
    console.log("you chose: "+choice[playerChoice]);
    console.log("the computer chose: "+choice[computerChoice]);
    judge(computerChoice, playerChoice);
 }