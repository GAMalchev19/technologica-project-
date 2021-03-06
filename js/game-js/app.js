// Declarations
const btns = document.querySelectorAll('.btn');
const winPositions = [
    //rows
    [ 1, 1, 1 , 0, 0, 0, 0, 0, 0], [ 0, 0, 0, 1, 1, 1, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 1, 1, 1],
    //columns
    [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ], [ 0, 1, 0, 0, 1, 0, 0, 1, 0 ], [ 0, 0, 1, 0, 0, 1, 0, 0, 1],
    //diagonals
    [1 , 0, 0, 0, 1 , 0, 0, 0, 1], [ 0, 0, 1, 0, 1, 0, 1, 0, 0 ]
];
let states = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
let state = 1; // 1 = X // 2 = O
let gameEnd = false;

// Event listeners
document.getElementById("restartButton").addEventListener("click", restartGame);

// Main game loop
for (let i = 0; i < btns.length; i++)
{
    btns[i].classList.add("clickable");
    btns[i].addEventListener("click", () => {
        if(btns[i].classList.contains("clickable"))
        {
            inputValues(btns[i], i);
            winStateCheck();
            computer();
            winStateCheck();
        }
    });
}

let reverse = (val) => {
    if(val == 1)
        return 2;
    else
        return 1;
}

// Visualising board state
function inputValues(gridPosition, index)
{
    if(!gameEnd){
        if (state == 1) {
            gridPosition.innerHTML = "<svg viewBox='0 0 1350 600'><text x='50%' y='90%' text-anchor='middle' class='X'>X</text></svg>";
            gridPosition.classList.add("clickedX");
            states[index] = state;
            state = reverse(state);
            gridPosition.classList.remove("clickable");
        }
        else if(state == 2) {
            gridPosition.innerHTML = "<span style=''>O</span>";
            gridPosition.classList.add("clickedO");
            states[index] = state;
            state = reverse(state);
            gridPosition.classList.remove("clickable");
        }
        else {
            console.log("yes");
            gridPosition.innerHTML = "<span style=''></span>";
            if(gridPosition.classList.contains("clickedO"))
                gridPosition.classList.remove("clickedO");
            else
                gridPosition.classList.remove("clickedX");
            states[index] = 0;
            gridPosition.classList.add("clickable");
        }
    }  
}

// Computer algorithm
function computer(){ 
    if(!gameEnd){   
        let stagger = 0;
        let foundSlot = false;
        if(!foundSlot){
            //row counter move
            for(let i = 0; i < 3; i++){
                if(states[0 + stagger] + states[1 + stagger] + states[2 + stagger] == 2){
                    if((states[0 + stagger] == 0 || states[0 + stagger] == 1) && (states[1 + stagger] == 0 || states[1 + stagger] == 1) && (states[2 + stagger] == 0 || states[2 + stagger] == 1)) {
                        for(let j = 0 + stagger; j < 3 + stagger; j++){
                            if(!foundSlot){
                                if(states[j] == 0){
                                    inputValues(btns[j], j);
                                    foundSlot = true;
                                }
                            }
                        }
                    }
                }
                stagger+=3;
            }

            stagger = 0;
            //column counter move
            for(let i = 0; i < 3; i++){
                if(states[0 + stagger] + states[3 + stagger] + states[6 + stagger] == 2){
                    if((states[0 + stagger] == 0 || states[0 + stagger] == 1) && (states[3 + stagger] == 0 || states[3 + stagger] == 1) && (states[6 + stagger] == 0 || states[6 + stagger] == 1)) {
                        for(let j = 0; j < 3; j++){
                            if(!foundSlot){
                                if(states[j+stagger] == 0){
                                    inputValues(btns[j+stagger], j+stagger);
                                    foundSlot = true;
                                }
                                else if(states[j+3+stagger] == 0){
                                    inputValues(btns[j+3+stagger], j+3+stagger);
                                    foundSlot = true;
                                }
                                else{
                                    inputValues(btns[j+6+stagger], j+6+stagger);
                                    foundSlot = true;
                                }
                            }
                        }
                    }
                }
                stagger+=1;
            }

            stagger = 1;
            //diagonal counter move
            for(let i = 0; i < 2; i++){
                if(states[stagger] + states[5] + states[10-stagger] == 2){
                    if((states[stagger] == 0 || states[stagger] == 1) && (states[5] == 0 || states[5] == 1) && (states[10-stagger] == 0 || states[10-stagger] == 1)) {
                        for(let j = 0; j < 3; j++){
                            if(!foundSlot){
                                if(states[stagger] == 0){
                                    inputValues(btns[stagger], stagger);
                                    foundSlot = true;
                                }
                                else if(states[5] == 0){
                                    inputValues(btns[5], 5);
                                    foundSlot = true;
                                }
                                else{
                                    inputValues(btns[10-stagger], 10-stagger);
                                    foundSlot = true;
                                }
                                //console.log("correct");
                            }
                        }
                    }
                }
                stagger+=2;
            }

            if(!foundSlot){
                //console.log("incorrect");
                let randNum = Math.trunc(Math.random()*10)
                //console.log(randNum);
                if(states[randNum] === 0 && randNum != 9)
                inputValues(btns[randNum], randNum);
                else
                    computer();
            }
        }
    }
}

// Check whether board is full
function boardFull(){
    if(!gameEnd){
        for(let i = 0; i < 9; i++){
            if(states[i] === 0)
                return false;
        }
        gameEnd = true;
        drawDisplay();
        return true;
    }
}

function winStateCheck(){
    if(!gameEnd){
        for(let i = 0; i < 8; i++){
            let filledSlots = [0, 0, 0], counter = 0;
            for(let k = 0; k < 9; k++){
                if(winPositions[i][k] == true){
                    filledSlots[counter] = k;
                    counter++;
                }
            }

            for(let j = 0; j < 9; j++){
                if(states[filledSlots[0]] == states[filledSlots[1]] && states[filledSlots[0]] == states[filledSlots[2]] && states[filledSlots[0]] !== 0){
                    if(states[filledSlots[0]] == 1){
                        winDisplay();
                    }
                    else{
                        loseDisplay();
                    }
                }
            }
        }

        boardFull();
    }   
}


//Displaying results
function winDisplay(){
    gameEnd = true;
    document.querySelector('.overlaynt').classList.add("overlay");
    document.querySelector('.overlay_svgV').classList.add("overlaySVG_show");
    document.querySelector('body').classList.add("hidden-overflow");
}

function loseDisplay(){
    gameEnd = true;
    document.querySelector('.overlaynt').classList.add("overlay");
    document.querySelector('.overlay_svgL').classList.add("overlaySVG_show");
    document.querySelector('body').classList.add("hidden-overflow");
}

function drawDisplay(){
    document.querySelector('.overlaynt').classList.add("overlay");
    document.querySelector('.overlay_svgD').classList.add("overlaySVG_show");
    document.querySelector('body').classList.add("hidden-overflow");
}

function restartGame(){
    gameEnd = 0;
    for(let i = 0; i < btns.length; i++){
        states[i] = 0;
        state = 0;
        inputValues(btns[i],i);
    }
    state = 1;
    document.querySelector('body').classList.remove("hidden-overflow");
}