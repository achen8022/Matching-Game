let pickOne = null; //Pick Value
let pickTwo = null;
let buttonOne; //The button (to change color)
let buttonTwo;
let score = 0;
document.getElementById("score").innerHTML = score;
const result = document.querySelector('.result');

const red = document.querySelector('.red');
const red2 = document.querySelector('.red2');
const orange = document.querySelector('.orange');
const orange2 = document.querySelector('.orange2');
const yellow = document.querySelector('.yellow');
const yellow2 = document.querySelector('.yellow2');
const green = document.querySelector('.green');
const green2 = document.querySelector('.green2');
const blue = document.querySelector('.blue');
const blue2 = document.querySelector('.blue2');
const blueGreen = document.querySelector('.blueGreen');
const blueGreen2 = document.querySelector('.blueGreen2');
const purple = document.querySelector('.purple');
const purple2 = document.querySelector('.purple2');
const darkPurple = document.querySelector('.darkPurple');
const darkPurple2 = document.querySelector('.darkPurple2');

//Change colors
function changeRed() { //Red have id of 1
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    red.style.backgroundColor = '#FF0000';
    if (pickOne === null) {
        pickOne = 1;
        buttonOne = red;
        return;
    } else if (pickTwo === null) {
        pickTwo = 1;
        buttonTwo = red;
        compare();
    } else {
        resetPick();
    }
}
function changeRed2() { //Red have id of 1
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    red2.style.backgroundColor = '#FF0000';
    if (pickOne === null) {
        pickOne = 1;
        buttonOne = red2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 1;
        buttonTwo = red2;
        compare();
    } else {
        resetPick();
    }
}

function changeOrange() { //Orange have id of 2
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    orange.style.backgroundColor = '#FFA500';
    if (pickOne === null) {
        pickOne = 2;
        buttonOne = orange;
        return;
    } else if (pickTwo === null) {
        pickTwo = 2;
        buttonTwo = orange;
        compare();
    } else {
        resetPick();
    }
}
function changeOrange2() { //Orange have id of 2
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    orange2.style.backgroundColor = '#FFA500';
    if (pickOne === null) {
        pickOne = 2;
        buttonOne = orange2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 2;
        buttonTwo = orange2;
        compare();
    } else {
        resetPick();
    }
}

function changeYellow() { //Yellow have id of 3
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    yellow.style.backgroundColor = '#FFFF00';
    if (pickOne === null) {
        pickOne = 3;
        buttonOne = yellow;
        return;
    } else if (pickTwo === null) {
        pickTwo = 3;
        buttonTwo = yellow;
        compare();
    } else {
        resetPick();
    }
}
function changeYellow2() { //Yellow have id of 3
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    yellow2.style.backgroundColor = '#FFFF00';
    if (pickOne === null) {
        pickOne = 3;
        buttonOne = yellow2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 3;
        buttonTwo = yellow2;
        compare();
    } else {
        resetPick();
    }
}

function changeGreen() { //Green have id of 4
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    green.style.backgroundColor = '#008000';
    if (pickOne === null) {
        pickOne = 4;
        buttonOne = green;
        return;
    } else if (pickTwo === null) {
        pickTwo = 4;
        buttonTwo = green;
        compare();
    } else {
        resetPick();
    }
}
function changeGreen2() { //Green have id of 4
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    green2.style.backgroundColor = '#008000';
    if (pickOne === null) {
        pickOne = 4;
        buttonOne = green2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 4;
        buttonTwo = green2;
        compare();
    } else {
        resetPick();
    }
}

function changeBlueGreen() { //Blue Green have id of 5
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    blueGreen.style.backgroundColor = '#0D98BA';
    if (pickOne === null) {
        pickOne = 5;
        buttonOne = blueGreen;
        return;
    } else if (pickTwo === null) {
        pickTwo = 5;
        buttonTwo = blueGreen;
        compare();
    } else {
        resetPick();
    }
}
function changeBlueGreen2() { //Blue Green have id of 5
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    blueGreen2.style.backgroundColor = '#0D98BA';
    if (pickOne === null) {
        pickOne = 5;
        buttonOne = blueGreen2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 5;
        buttonTwo = blueGreen;
        compare();
    } else {
        resetPick();
    }
}

function changeBlue() { //Blue have id of 6
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    blue.style.backgroundColor = '#00FFFF';
    if (pickOne === null) {
        pickOne = 6;
        buttonOne = blue;
        return;
    } else if (pickTwo === null) {
        pickTwo = 6;
        buttonTwo = blue;
        compare();
    } else {
        resetPick();
    }
}
function changeBlue2() { //Blue have id of 6
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    blue2.style.backgroundColor = '#00FFFF';
    if (pickOne === null) {
        pickOne = 6;
        buttonOne = blue2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 6;
        buttonTwo = blue2;
        compare();
    } else {
        resetPick();
    }
}

function changePurple() { //Purple have id of 7
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    purple.style.backgroundColor = '#BF40BF';
    if (pickOne === null) {
        pickOne = 7;
        buttonOne = purple;
        return;
    } else if (pickTwo === null) {
        pickTwo = 7;
        buttonTwo = purple;
        compare();
    } else {
        resetPick();
    }
}
function changePurple2() { //Purple have id of 7
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    purple2.style.backgroundColor = '#BF40BF';
    if (pickOne === null) {
        pickOne = 7;
        buttonOne = purple2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 7;
        buttonTwo = purple2;
        compare();
    } else {
        resetPick();
    }
}

function changeDarkPurple() { //Dark Purple have id of 8
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    darkPurple.style.backgroundColor = '#A63E8D';
    if (pickOne === null) {
        pickOne = 8;
        buttonOne = darkPurple;
        return;
    } else if (pickTwo === null) {
        pickTwo = 8;
        buttonTwo = darkPurple;
        compare();
    } else {
        resetPick();
    }
}
function changeDarkPurple2() { //Dark Purple have id of 8
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    darkPurple2.style.backgroundColor = '#A63E8D';
    if (pickOne === null) {
        pickOne = 8;
        buttonOne = darkPurple2;
        return;
    } else if (pickTwo === null) {
        pickTwo = 8;
        buttonTwo = darkPurple2;
        compare();
    } else {
        resetPick();
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
            buttonOne.style.backgroundColor = '#000000';
            buttonTwo.style.backgroundColor = '#000000';
        },1500);
        resetPick();
    }
}
