function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";

        case 1:
            return "scissors";

        case 2:
            return "paper";
    }
};

function playRound(playerSelction, computerSelection) {
    if (playerSelction === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It's a Tie!"
            case "scissors":
                return "You win!"
            case "paper":
                return "You lose!"
        }

    }
    if (playerSelction === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose!"
            case "scissors":
                return "It's a Tie!"
            case "paper":
                return "You win!"
        }
    }
    if (playerSelction === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win!"
            case "scissors":
                return "You lose!"
            case "paper":
                return "It's a Tie!"
        }
    }
};

function game() {
    let playerScore = 0;
    let compScore = 0;
    let rounds = 0;
    while (rounds < 5) {
        let selection = prompt("Please choose, rock, paper, or scissors").toLowerCase();
        compSelection = getComputerChoice()
        rounds++;
        console.log(`Computer selected ${compSelection}!`)
        console.log(playRound(selection, compSelection))
        switch(playRound(selection, compSelection)){
            case "You win!":
                playerScore++;
                break;
            case "You lose!":
                compScore++;
                break;
            }
    console.log(`The score is Player: ${playerScore}, Computer: ${compScore}!`)
        
    };
    return playerScore - compScore;
};

let finalScore = game();

if(finalScore < 0){
    console.log("After 5 rounds, you lose!")
}

else if(finalScore == 0){
    console.log("After 5 rounds, it's a Tie!")
}

else {
    console.log("After 5 rounds, you win!")
}