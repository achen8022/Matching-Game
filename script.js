let pickOne, pickTwo;
let score = 0;
document.getElementById('red').innerHTML = 'red'

//Change colors
function changeRed(){ //Red have id of 1
    score +1;
    if(pickOne === null){
        pickOne = 1;
        return;
    }else if(pickTwo === null){
        pickTwo = 1;
        compare();
        return;
    }else{
        resetPick();
    }
}
function changeOrange(){ //Orange have id of 2
    score +1;
    if(pickOne === null){
        pickOne = 2;
        return;
    }else if(pickTwo === null){
        pickTwo = 2;
        compare();
        return;
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
        window.alert("MATCH!");
        return;
    }else{
        window.alert("UNMATCH!");
        resetPick();
        return;
    }
}
