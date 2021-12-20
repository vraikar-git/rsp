function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors"
    }
}

function play(playerSelection, computerSelection) {
    //console.assert(typeof (playerSelection) == "string" && typeof (computerSelection) == "string")
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        console.log("Tie : Both selected same");
        return("Tie : Both selected same");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win ! Paper beats Rock");
        return("You win ! Paper beats Rock");
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose ! scissors beats paper");
        return("You lose ! scissors beats paper");
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win ! scissors beats paper");
        return("You win ! scissors beats paper");
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose ! rock beats scissors");
        return("You lose ! rock beats scissors");
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You win ! rock beats paper");
        return("You win ! rock beats paper");
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You lose ! scissors beats rock");
        return("You lose ! scissors beats rock");
    }
}

function game(){
    
    while(true){
    let selection = prompt("Enter Selection").toLowerCase();
    console.log(selection)
    
    if(selection != "paper" && selection != "rock" && selection != "scissors"){
        alert("Game abort : please enter valid selection");
        
    }
    let result = play(selection,computerPlay());
    console.log(result);
    }
}