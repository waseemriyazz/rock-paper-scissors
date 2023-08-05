
function getComputerChoice(){
     x = Math.floor(Math.random() *3)
     if (x==0)
     {
        return "rock"
     }
     else if (x==1)
     {
        return "paper"
     }
     else {
        return "scissors"
     }

}
function getplayerChoice(){
let playerSelection = prompt('Enter your choice: '); 
return playerSelection;
}

function match (playerSelection,computerSelection)
{
    if (playerSelection==computerSelection)
    {
        console.log( "tie");
        return 0;
    }
    else if (playerSelection=='rock' && computerSelection=='scissors')
    {   
        console.log("rock beats scissors, you won");
        return "Player";
    }
    else if (playerSelection=='scissors'&& computerSelection=='rock')
    {
    
        console.log( "rock beats scissors, you lost");
        return "Computer";
    }
    else if (playerSelection=='rock' && computerSelection=='paper')
    {   
    
        console.log( "paper beats rock, you lost");
        return "Computer";
    }
    else if (playerSelection=='paper' && computerSelection=='rock')
    {   
        console.log( "paper beats rock, you won");
        return "Player";
    }
    else if (playerSelection=='paper' && computerSelection=='scissors')
    {   
    
        console.log("scissors beats paper, you lost");
        return "Computer";
    }
    else if (playerSelection=='scissor' && computerSelection=='paper')
    {   
        console.log( "scissors beats paper, you won");
        return "Player";
    }
    
}
    let playerScore = 0;
    let computerScore = 0;

while (playerScore<5 && computerScore<5)
{
   let computerChoice = getComputerChoice();
   let playerChoice = getplayerChoice();
   let winner = match(playerChoice,computerChoice);
   if(winner =="Player")
   {
    playerScore++;
   }
   if (winner =="Computer")
   {
    computerScore++;
   }
}
if (playerScore==5)
{
    console.log("YOU WON");
}
if(computerScore==5)
{
    console.log("YOU LOST");
}

   
   

