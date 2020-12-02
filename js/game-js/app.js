/*
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("hi");
        btn.innerHTML = "X";
    })
});
*/

/*
const btns = document.getElementsByClassName('btn');

btns.forEach(item => {
    item.AddEventListener("click", item => {
        document.item.innerHTML = "X";
    })
});
*/



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

function inputValues(gridPosition, index)
{
    if(!gameEnd){
        if (state == 1) {
            gridPosition.innerHTML = "<svg viewBox='0 0 1350 600'><text x='50%' y='90%' text-anchor='middle' class='X'>X</text></svg>";
            gridPosition.classList.add("clickedX");
            states[index] = state;
            state = reverse(state);
        }
        else{
                gridPosition.innerHTML = "<span style=''>O</span>";
                gridPosition.classList.add("clickedO");
                states[index] = state;
                state = reverse(state);
        }
        gridPosition.classList.remove("clickable");
    }  
}

function computer(){ 
    if(!gameEnd){   
        let stagger = 0;
        let foundSlot = false;
        if(!foundSlot){
            //row counter move
            for(let i = 0; i < 3; i++){
                if(states[0 + stagger] + states[1 + stagger] + states[2 + stagger] == 2){
                    for(let j = 0 + stagger; j < 3 + stagger; j++){
                        if(!foundSlot){
                            if(states[j] == 0){
                                inputValues(btns[j], j);
                                foundSlot = true;
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
                stagger+=1;
            }

            stagger = 1;
            //diagonal counter move
            for(let i = 0; i < 2; i++){
                if(states[stagger] + states[5] + states[10-stagger] == 2){
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
                            console.log("correct");
                        }
                    }
                }
                stagger+=2;
            }

            if(!foundSlot){
                console.log("incorrect");
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