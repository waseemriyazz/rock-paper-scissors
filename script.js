const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const btns = document.querySelectorAll(".btn");
const pScore=document.querySelector(".playerScore");
const cScore=document.querySelector(".computerScore");
const gameOverCard = document.getElementById("game-over-card");
const gameOverMessage = document.getElementById("game-over-message");
const playAgainButton = document.getElementById("play-again");

let player ; 
let computer ;
const dummy = "NONE"; 
let result = dummy ;
let computerScore = 0;
let playerScore = 0;
btns.forEach(button => button.addEventListener("click", () => {
    if(playerScore<5&& computerScore<5){


    player = button.textContent;
    computerTurn();
    playerText.textContent = `PLAYER: ${player}`;
    computerText.textContent = `COMPUTER: ${computer}`;
    checkWinner();
    resultText.textContent = `RESULT: ${result}`;
    updateScores(result);
    checkGameOver();
}
}));
function updateScores(winner){
    if(winner=="NONE")
    {
        
    }
    else if (winner=="YOU WIN!")
    {
        playerScore++;
        pScore.textContent=playerScore;
    }
    else if (winner == "YOU LOSE!") 
    {
        computerScore++;
        cScore.textContent=computerScore;
    }

}

function checkGameOver(){
    if (playerScore ===5 || computerScore === 5)
    {
        const message = playerScore === 5 ? "VICTORY!" : "DEFEAT!";
        gameOverMessage.textContent = message;
        
    }
}



playAgainButton.addEventListener("click",() => {
    playerScore = 0 ;
    computerScore = 0 ;
    pScore.textContent ="0";
    cScore.textContent ="0";
    gameOverMessage.textContent = "";
    resultText.textContent = "RESULT:";


} )

function computerTurn()
{
    const randNum = Math.floor(Math.random() * 3)+1;
    switch(randNum){
        case 1:
        computer = "ROCK";
        break;
        case 2:
        computer = "PAPER";
        break;
        case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player==computer)
    {
        result = "TIE!";
    }
    else if ((player=="ROCK"&& computer=="SCISSORS") || (player=="PAPER"&& computer=="ROCK") ||
    (player=="SCISSORS" && computer =="PAPER"))
    {
        result = "YOU WIN!";
        
    }
    else {
        result = "YOU LOSE!";
    }
}