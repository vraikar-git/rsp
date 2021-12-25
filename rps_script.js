 console.log = function() {};

function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors"
    }
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie : Both selected same");
        return { 
            score : 0,
            message : "Tie : Both selected same"
        };
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win ! Paper beats Rock");
        return { 
            score : 1,
            message :"You win ! Paper beats Rock"
        };
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose ! scissors beats paper");
        return { 
            score : -1,
            message : "You lose ! scissors beats paper"
        };
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win ! scissors beats paper");
        return { 
            score : 1,
            message : "You win ! scissors beats paper"
        };
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose ! rock beats scissors");
        return { 
            score : -1,
            message : "You lose ! rock beats scissors"
        };
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You win ! rock beats paper");
        return { 
            score : 1,
            message : "You win ! rock beats paper"
        };
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You lose ! scissors beats rock");
        return { 
            score : -1,
            message : "You lose ! scissors beats rock"
        };
    }
}


let cScore = 0, pScore = 0;

function game(){
    const cChoice = computerPlay();
    const pChoice = this.value;
    let result = play(pChoice, cChoice);
    console.log(result);
    updateScore1(result);
}

function reset(){
    const message = document.querySelector('.message')
    message.textContent = "";
    cScore = 0;
    pScore = 0;
    document.querySelector('#score-p').textContent = 0;
    document.querySelector('#score-c').textContent = 0;
}

function updateScore(result){
    result === 1 ? pScore++ : result === -1 ? cScore++ : pScore ;
    console.log(`player ${pScore} computer ${cScore}`);
    const cSpan = document.querySelector('#cscore');
    const pSpan = document.querySelector('#pscore');
    const screen = document.querySelector('#screen');
    screen.textContent = result === 1 ? "YOU WIN" : 
            result === -1 ? "YOU LOSE" : "TIE" ;
    cSpan.textContent = cScore;
    pSpan.textContent = pScore;
}

function updateScore1(result){
    console.log(result.score + result.message);
    result.score === 1 ? pScore++ : result.score === -1 ? cScore++ : pScore ;
    console.log(`player ${pScore} computer ${cScore}`);
    const playerScore = document.querySelector('#score-p');
    const compScore = document.querySelector('#score-c');
    const message = document.querySelector('.message')
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
    const para = document.createElement('p');
    para.textContent = result.message;
    message.appendChild(para);
}

const btns= document.querySelectorAll('.choice')

btns.forEach((btn) => btn.addEventListener('click',game));

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click',reset);