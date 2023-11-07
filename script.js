let pickOne = null; //Pick Value
let pickTwo = null;
let buttonOne; //The button (to change color)
let buttonTwo;
let score = 0;
let buttonsEnabled = true;
document.getElementById("score").innerHTML = score;
const result = document.querySelector('.result');
const colorClasses = ['red', 'red2', 'orange', 'orange2', 'yellow', 'yellow2', 'green', 'green2', 'blue', 'blue2', 'blueGreen', 'blueGreen2', 'purple', 'purple2', 'darkPurple', 'darkPurple2'];
const buttons = document.querySelectorAll('button');
// Fisher-Yates Sorting Algorithm
function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
}

function assignColorToButtons() {
    randomizeArray(colorClasses);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList = '';
        buttons[i].classList.add(colorClasses[i]);
        buttons[i].addEventListener('click', function () {
            changeButtonColor(buttons[i]);
        });
    }
    console.log(buttons);
}
function changeButtonColor(button) {
    if (buttonsEnabled) {
        let buttonClass = button.classList[0];
        if (buttonClass === 'red' || buttonClass === 'red2') {
            button.style.backgroundColor = '#FF0000';
            buttonClass = 'red';
        } else if (buttonClass === 'orange' || buttonClass === 'orange2') {
            button.style.backgroundColor = '#FFA500';
            buttonClass = 'orange';
        } else if (buttonClass === 'yellow' || buttonClass === 'yellow2') {
            button.style.backgroundColor = '#FFFF00';
            buttonClass = 'yellow';
        } else if (buttonClass === 'green' || buttonClass === 'green2') {
            button.style.backgroundColor = '#008000';
            buttonClass = 'green';
        } else if (buttonClass === 'blueGreen' || buttonClass === 'blueGreen2') {
            button.style.backgroundColor = '#0D98BA';
            buttonClass = 'blueGreen';
        } else if (buttonClass === 'blue' || buttonClass === 'blue2') {
            button.style.backgroundColor = '#00FFFF';
            buttonClass = 'blue';
        } else if (buttonClass === 'purple' || buttonClass === 'purple2') {
            button.style.backgroundColor = '#C644D6';
            buttonClass = 'purple';
        } else if (buttonClass === 'darkPurple' || buttonClass === 'darkPurple2') {
            button.style.backgroundColor = '#84348E';
            buttonClass = 'darkPurple';
        }
        score = score + 1;
        document.getElementById("score").innerHTML = score;
        if (pickOne === null) {
            pickOne = buttonClass; // Set the pickOne variable
            buttonOne = button;
        } else if (pickTwo === null) {
            pickTwo = buttonClass; // Set the pickTwo variable
            buttonTwo = button;
            compare();
        } else {
            resetPick();
        }
    }
}
function resetPick() {
    pickOne = null;
    pickTwo = null;
}

function compare() {
    if (pickOne === pickTwo) {
        result.textContent = 'MATCH!';
        resetPick();
    } else {
        result.textContent = 'UNMATCH! Try Again.';
        setTimeout(function () {
            buttonOne.style.backgroundColor = '#fff';
            buttonTwo.style.backgroundColor = '#fff';
            buttonsEnabled = true;
        }, 1500);
        buttonsEnabled = false;
        resetPick();

    }
    buttons.disabled = false;
}

function restartGame(){
    score = 0;
    document.getElementById("score").innerHTML = score;
    location.reload();
}

