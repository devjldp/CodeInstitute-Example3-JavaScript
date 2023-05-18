// 1 - Event the code to be executed when the page has finished loading

// Wait for the DOM to finish loading before running the Game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded",function() {

    let buttons = document.getElementsByTagName('button'); // it is an array 5 buttons in total.

    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute("data-type") === 'submit'){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById('answer-box').addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            checkAnswer();
        }
    });
    runGame("addition");

})


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

// 2 - Code to be executed when the user clicks a button. 
function runGame(gameType) {
    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();
    let num1 = Math.floor(Math.random()*25+1);
    let num2 = Math.floor(Math.random()*25+1);
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2)
    } else if(gameType === "substract"){
        displaySubtractQuestion(num1, num2)
    } else if(gameType === "multiply"){
        displayMultiplyQuestion(num1, num2)
    }else if(gameType === "division"){
        displayDivisionQuestion(num1, num2)
    }
}

function checkAnswer() {
    let calculatedAnswer = calculateCorrectAnswer();
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let isCorrect = userAnswer === calculatedAnswer[0];
    if(isCorrect){
        alert("You win!");
        incrementScore();
    } else{
        alert("Go back to School!");
        incrementIncorrect();
    }
    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    let result;
    if(operator === '+'){
        return[ operand1+operand2,"addition"];
    } else if(operator === '-'){
        return[ operand1-operand2,"substract"];
    } else if(operator === 'x'){
        return[ operand1*operand2,"multiply"];
    }else if(operator === '/'){
        return[ operand1/operand2,"division"];
    }

}

function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++score;    
}
function incrementIncorrect() {
    let incorrect = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++incorrect;    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    let dividend = operand1 > operand2 ? operand1 : operand2;
    let divisor = operand1 > operand2 ? operand2 : operand1;
    let addDividend = Math.ceil(dividend/divisor)
    dividend = addDividend * divisor;
    document.getElementById('operand1').textContent = dividend;
    document.getElementById('operand2').textContent = divisor;
    document.getElementById('operator').textContent = '/';
}
