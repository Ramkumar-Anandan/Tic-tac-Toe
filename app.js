const boxElement=document.querySelectorAll(".box");
var winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var xAttempts = [];
var yAttempts = [];
var click=0;
var temp = 0;
const message= document.getElementById('message');
const gameResult=document.getElementById("result");
const restart=document.getElementById("button");

boxElement.forEach(box=>{
    console.log(box);
    box.addEventListener('click',handleClick,{once:true});
})

function handleClick(e){
    console.log(e.target.getAttribute('id'));
    const i=e.target.getAttribute('id');
    const text = document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);
    console.log(boxElement[i-1]);
    if(click%2 == 0){
        xAttempts.push(parseInt(i-1));
        console.log(xAttempts)
        text.innerHTML="X";
        text.style.color = 'white';
        result(winningCombination,xAttempts,"X");
    }
    else{
        yAttempts.push(parseInt(i-1));
        console.log(yAttempts);
        text.innerHTML="O";
        text.style.color = 'white';
        result(winningCombination,yAttempts,"O");
    }
    click++;
    if(click == 9 && temp == 0){
        gameResult.style.visibility="visible";
        message.innerHTML = "Match draw";
    }
}
function result(winningCombination, attempts, player){
    for(var i = 0; i<winningCombination.length; i++){
        let checker = [];
        for(var j = 0; j<winningCombination[i].length; j++){
            if(attempts.includes(winningCombination[i][j])){
                checker.push(true);
            } else {
                checker.push(false);
            }
        }
        if (checker.every(check => check === true)){
            gameResult.style.visibility="visible";
            message.innerHTML ="'"+ player +"'" + " Wins";  
            temp=1;          
        }
    }  
}

restart.onclick=()=>{
    location.reload();
}