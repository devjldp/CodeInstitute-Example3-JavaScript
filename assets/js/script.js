// 1 - Event the code to be executed when the page has finished loading

// Wait for the DOM to finish loading before running the Game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded",function() {

    let buttons = document.getElementsByTagName('button'); // it is an array 5 buttons in total.

    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute("data-type") === 'submit'){
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You cliked ${gameType}`);
            }
        })
    }



})




// 2 - Code to be executed when the user clicks a button. 
function runGame() {
    let num1 = Math.floor(Math.random()*25+1);
    let num2 = Math.floor(Math.random()*25+1);
}

function checkAnswer() {

}

function calculateCorrectanswer() {

}

function incrementScore() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

