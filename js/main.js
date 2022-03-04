// recupero la griglia
const gridElement = document.getElementById("grid");

const sceltaPlayer = document.getElementById("difficolta");
let numeroCell;
let dimensioniCell;
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
   
    if(sceltaPlayer.value == "facile"){
        numeroCell = 100;
        dimensioniCell = "square-1";
    } else if(sceltaPlayer.value == "medio"){
        numeroCell = 81;
        dimensioniCell = "square-2";
    }   else{
        numeroCell = 49;
        dimensioniCell = "square-3";
    }

    for (let i = 1; i < (numeroCell+1); i++){
        const square = document.createElement("div");
        square.classList.add(dimensioniCell);
        gridElement.appendChild(square);
        square.innerHTML = i;
        square.addEventListener('click', function(){
            square.classList.toggle('cliccato');
        })
    }
});