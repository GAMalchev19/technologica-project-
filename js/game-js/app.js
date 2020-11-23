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
let states = [];
let state = true; // true = X // false = O
let gameEnd = false;

for (let i = 0; i < btns.length; i++)
{
    btns[i].classList.add("clickable");
    btns[i].addEventListener("click", () => {
        if(btns[i].classList.contains("clickable"))
        {
            put(btns[i], i);
            winState();
            komputer();
            winState();
        }
    });
}

function reverse(val){
    return !val;
}

function put(wer, i)
{
    if(!gameEnd){
        if (state) {
            wer.innerHTML = "<svg viewBox='0 0 1350 600'><text x='50%' y='90%' text-anchor='middle' class='X'>X</text></svg>";
            wer.classList.add("clickedX");
            states[i] = state;
            state = reverse(state);
        }
        else{
                wer.innerHTML = "<span style=''>O</span>";
                wer.classList.add("clickedO");
                states[i] = state;
                state = reverse(state);
        }
        wer.classList.remove("clickable");
    }  
}

function komputer(){
    if(!gameEnd){
        /*let index;

        //counter row
        if((states[0] === true && states[1] === true && states[2] === undefined) || (states[0] === true && states[1] === undefined && states[2] === true) || (states[0] === undefined && states[1] === true && states[2] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else if((states[3] === true && states[4] === true && states[5] === undefined) || (states[3] === true && states[4] === undefined && states[5] === true) || (states[3] === undefined && states[4] === true && states[5] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else if((states[6] === true && states[7] === true && states[8] === undefined) || (states[6] === true && states[7] === undefined && states[8] === true) || (states[6] === undefined && states[7] === true && states[8] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        //counter diagonal
        else if((states[0] === true && states[4] === true && states[8] === undefined) || (states[0] === true && states[4] === undefined && states[8] === true) || (states[0] === undefined && states[4] === true && states[8] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else if((states[2] === true && states[4] === true && states[6] === undefined) || (states[2] === true && states[4] === undefined && states[6] === true) || (states[2] === undefined && states[4] === true && states[6] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        //counter column
        else if((states[0] === true && states[3] === true && states[6] === undefined) || (states[0] === true && states[3] === undefined && states[6] === true) || (states[0] === undefined && states[3] === true && states[6] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else if((states[1] === true && states[4] === true && states[7] === undefined) || (states[1] === true && states[4] === undefined && states[7] === true) || (states[1] === undefined && states[4] === true && states[7] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else if((states[2] === true && states[5] === true && states[8] === undefined) || (states[2] === true && states[5] === undefined && states[8] === true) || (states[2] === undefined && states[5] === true && states[8] === true)){
            for(let i = 0; i < 3; i++){
                if(states[i] === undefined)
                    index = i;
            }
            console.log(index);
            put(btns[index], index);
        }

        else{*/
            let randNum = Math.trunc(Math.random()*10)
            console.log(randNum);
            if(states[randNum] === undefined && randNum != 9)
                put(btns[randNum], randNum);
            else
                komputer();
        //}
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
            if(states[i]===undefined)
                return false;
        }
        gameEnd = true;
        drawDisplay();
        return true;
    }
}

function winState(){
    if(!gameEnd){

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
    }   
}

function winDisplay(){
        gameEnd = true;
        document.getElementById("result").innerHTML = "You win!";
        document.querySelector('.overlaynt').classList.add("overlay");
        document.querySelector('.overlay_svgV').classList.add("overlaySVG_show");
}

function loseDisplay(){
        gameEnd = true;
        document.getElementById("result").innerHTML = "You lose!";
        document.querySelector('.overlaynt').classList.add("overlay");
        document.querySelector('.overlay_svgL').classList.add("overlaySVG_show");
}

function drawDisplay(){
    document.getElementById("result").innerHTML = "Draw!";
}