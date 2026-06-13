let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let cont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let turnX=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    cont.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnX==true){     //turn of player O                        
            box.innerText="0";
            turnX=false
        }
        else{ //turn of player X
            box.innerText="X";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for (let box in boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
   }
 }
const showWinner =(winner) =>{
      msg.innerText=`Congratulations! ${winner} won the Game.`
      cont.classList.remove("hide");
      disableBoxes();
}
const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
      if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1 === pos2&& pos2 === pos3){
            console.log("Winner",pos1);     
            showWinner(pos1);
        }
    }
}
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);