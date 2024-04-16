let color = "black"; // variabile globale
let click =  true; 


function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div"); //squares sono ogni div che è composta board
    squares.forEach((div) => div.remove()); //tolgo ogni div prima di poterne aggiungere in valore size
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`; // serve per fare size colonne di 1 size della larghezza del container
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`; // uguale per righe

    let amount = size * size; //calcolo area board
    for (let i=0; i < amount; i++) {
        let square = document.createElement("div"); // creo square per ogni div 
        square.addEventListener("mouseover", colorSquare ); // aggiungo evento e chiamo funzione quando passo col mouse per cambiare colore in nero
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square); // insertAdj è metodo per aggiungere elemento ad altro (square a board) mettendolo come ultimo figlio dentro quel elemento
    }
}  


populateBoard(16); //size preimpostata a 16

function changeSize (input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'; //se metto size tra 2 e 100 non da errore
    populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex'; //sennò lo mostra
    }
}

function colorSquare() {
    if (click) { //la funzione colora solo se click è true (per disegnare bene le forme)
     if(color === "random") {
         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // per fare colore random
     } else {
        this.style.backgroundColor = color; //funzione per disegnare this si riferisce all'elemento dell eventlistener in questo caso square
     }
    }
}

function changeColor(choice) { //funzione cambio colore
    color = choice; 
}


function resetBoard() { // funzione per reset board
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');  //imposto colore div bianco
}

document.querySelector("body").addEventListener("click", (e) => { //eventlistener click nel body cambio valore di click così da attivare e disattivare disegno
    if(e.target.tagName != 'BUTTON'){                             // ma solo se viene clickato qualcosa che non è un bottone
    click = !click;
    if(click) {
        document.querySelector('.mode').textContent = "Mode: Coloring" //se click true c'è scritta coloring
    } else {
        document.querySelector('.mode').textContent = "Mode: not Coloring"
    }
    }
});