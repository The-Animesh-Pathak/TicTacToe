let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg=document.querySelector("#msg");
let newbtn = document.querySelector(".new");

let turno = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
const disableBox=()=>{
    for (box of boxes){
        box.disabled=true;
    }
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner()
    });
});
const checkWinner=()=>{
    for(pattern of winPattern){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            msg.innerText="Winner is "+ pos1Val;
            disableBox();
        };
      }
    };

};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        msg.innerText="";
        box.disabled = false;
    });
});
newbtn.addEventListener("click", () => {
    let answer = confirm("Do you want to start a new game?");
    if (answer) {
        boxes.forEach((abox) => {
            abox.innerText = "";
            abox.disabled = false;
        });
        msg.innerText = "";  // Clear any winner message
    } else {
        console.log("Game will resume.");
    }
});

