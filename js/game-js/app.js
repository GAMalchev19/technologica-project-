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

for (let i = 0; i < btns.length; i++)
{
    btns[i].classList.add("clickable");
    btns[i].addEventListener("click", () => {
        if(btns[i].classList.contains("clickable"))
        {
            put(btns[i]);
            komputer();
        }
    });
    
}

function reverse(val)
{
    return !val;
}

function put(wer)
{
    if (state) {
        wer.innerHTML = "X";
        state = reverse(state);
    }
    else{
        wer.innerHTML = "O";
        state = reverse(state);
    }
    wer.classList.remove("clickable");
}