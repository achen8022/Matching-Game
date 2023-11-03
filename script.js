let pickOne, pickTwo;
let score = 0;

const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const blueGreen = document.querySelector('.blueGreen');
const purple = document.querySelector('.purple');
const darkPurple = document.querySelector('.darkPurple');

//Change colors
function changeRed(){ //Red have id of 1
    score = score +1;
    red.style.backgroundColor = '#FF0000';
    if(pickOne === null){
        pickOne = 1;
        return;
    }else if(pickTwo === null){
        pickTwo = 1;
        compare();
    }else{
        resetPick();
    }
}

function changeOrange(){ //Orange have id of 2
    score = score +1;
    if(pickOne === null){
        pickOne = 2;
        return;
    }else if(pickTwo === null){
        pickTwo = 2;
        compare();
    }else{
        resetPick();
    }
}

function changeYellow(){ //Yellow have id of 3
    score = score +1;
    if(pickOne === null){
        pickOne = 3;
        return;
    }else if(pickTwo === null){
        pickTwo = 3;
        compare();
    }else{
        resetPick();
    }
}

function changeGreen(){ //Green have id of 4
    score = score +1;
    if(pickOne === null){
        pickOne = 4;
        return;
    }else if(pickTwo === null){
        pickTwo = 4;
        compare();
    }else{
        resetPick();
    }
}

function changeBlueGreen(){ //Blue Green have id of 5
    score = score +1;
    if(pickOne === null){
        pickOne = 5;
        return;
    }else if(pickTwo === null){
        pickTwo = 5;
        compare();
    }else{
        resetPick();
    }
}

function changeBlue(){ //Blue have id of 6
    score = score +1;
    if(pickOne === null){
        pickOne = 6;
        return;
    }else if(pickTwo === null){
        pickTwo = 6;
        compare();
    }else{
        resetPick();
    }
}

function changePurple(){ //Purple have id of 7
    score = score +1;
    if(pickOne === null){
        pickOne = 7;
        return;
    }else if(pickTwo === null){
        pickTwo = 7;
        compare();
    }else{
        resetPick();
    }
}

function changeDarkPurple(){ //Dark Purple have id of 8
    score = score +1;
    if(pickOne === null){
        pickOne = 8;
        return;
    }else if(pickTwo === null){
        pickTwo = 8;
        compare();
    }else{
        resetPick();
    }
}

function resetPick(){
    pickOne = null;
    pickTwo = null;
}

function compare(){
    if(pickOne === pickTwo){
        console.log("Match!");
        resetPick();
    }else{
        console.log("UNMATCH!");
        resetPick();
    }
}
