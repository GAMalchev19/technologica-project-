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
let states = [];
let state = true; // true = X // false = O
let gameEnd = false;

for (let i = 0; i < btns.length; i++)
{
    btns[i].classList.add("clickable");
    btns[i].addEventListener("click", () => {
        if(btns[i].classList.contains("clickable"))
        {
            inputValues(btns[i], i);
            winState();
            computer();
            winState();
        }
    });
}

function reverse(val){
    return !val;
}

function inputValues(gridPosition, i)
{
    if(!gameEnd){
        if (state) {
            gridPosition.innerHTML = "<svg viewBox='0 0 1350 600'><text x='50%' y='90%' text-anchor='middle' class='X'>X</text></svg>";
            gridPosition.classList.add("clickedX");
            states[i] = state;
            state = reverse(state);
        }
        else{
                gridPosition.innerHTML = "<span style=''>O</span>";
                gridPosition.classList.add("clickedO");
                states[i] = state;
                state = reverse(state);
        }
        gridPosition.classList.remove("clickable");
    }  
}

function computer(){
    if(!gameEnd){    
            let randNum = Math.trunc(Math.random()*10)
            //console.log(randNum);
            if(states[randNum] === undefined && randNum != 9)
            inputValues(btns[randNum], randNum);
            else
                computer();
    }
}

function boardFull(){
    /*states.forEach(stat => {
        if(stat === undefined)
            return false;
    });
    return true;*/
    if(!gameEnd){
        for(let i = 0; i < 9; i++){
            if(states[i] === undefined)
                return false;
        }
        gameEnd = true;
        drawDisplay();
        return true;
    }
}

function winState(){
    if(!gameEnd){

        for(let i = 0; i < 8; i++){
            let filledSlots = [undefined, undefined, undefined], counter = 0;
            for(let k = 0; k < 9; k++){
                if(winPositions[i][k] == true){
                    filledSlots[counter] = k;
                    counter++;
                }
                console.log(filledSlots[0]);
            
            }

            for(let j = 0; j < 9; j++){
                if(states[filledSlots[0]] == states[filledSlots[1]] && states[filledSlots[0]] == states[filledSlots[2]] && states[filledSlots[0]] !== undefined){
                    if(states[filledSlots[0]]){
                        winDisplay();
                    }
                    else{
                        loseDisplay();
                    }
                }
            }
        }

        /*

        //row check
        
        if(states[0] == states[1] && states[1] == states[2]){
            if(states[0])
                winDisplay();
            else if(states[0]==false)
                loseDisplay();
        }

        if(states[3] == states[4] && states[4] == states[5]){
            if(states[3])
                winDisplay();
            else if(states[3]==false)
                loseDisplay();
            
        }

        if(states[6] == states[7] && states[7] == states[8]){
            if(states[6])
                winDisplay();
            else if(states[6]==false)
                loseDisplay();
                
        }


        //diagonal check
        if(states[0] == states[4] && states[4] == states[8]){
            if(states[0])
                winDisplay();
            else if(states[0]==false)
                loseDisplay();
            
        }

        if(states[2] == states[4] && states[4] == states[6]){
            if(states[2])
                winDisplay();
            else if(states[2]==false)
                loseDisplay();
            
        }


        //column check
        if(states[0] == states[3] && states[3] == states[6]){
            if(states[0])
                winDisplay();
            else if(states[0]==false)
                loseDisplay();
            
        }

        if(states[1] == states[4] && states[4] == states[7]){
            if(states[1])
                winDisplay();
            else if(states[1]==false)
                loseDisplay();        
            
        }

        if(states[2] == states[5] && states[5] == states[8]){
            if(states[2])
                winDisplay();
            else if(states[2]==false)
                loseDisplay();
            
        }
        */
    }   
}

function winDisplay(){
        gameEnd = true;
        document.querySelector('.overlaynt').classList.add("overlay");
        document.querySelector('.overlay_svgV').classList.add("overlaySVG_show");
}

function loseDisplay(){
        gameEnd = true;
        document.querySelector('.overlaynt').classList.add("overlay");
        document.querySelector('.overlay_svgL').classList.add("overlaySVG_show");
}

function drawDisplay(){
    document.getElementById("result").innerHTML = "Draw!";
}