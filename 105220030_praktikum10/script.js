function play(pilihanPlayer) {
    const computerSelection = Math.floor(Math.random() * 3); // 0 - 2 random

    if(pilihanPlayer === computerSelection) {
        draw();
    } else if((pilihanPlayer + 1)%3 == computerSelection) {
        score("computer");
    } else {
        score("player");
    }

    moves(pilihanPlayer, computerSelection);
}

function moves(pilihanPlayer, computerSelection) {
    const possibility = ["rock", "paper", "scissor"];
    const container = document.getElementById("moves");

    const imgPlayer = new Image();
    const imgComputer = new Image();
    imgPlayer.src = `./images/${possibility[pilihanPlayer]}.png`;
    imgComputer.src = `./images/${possibility[computerSelection]}.png`;

    const text = document.createElement("h1");
    text.appendChild(document.createTextNode("VS"));

    container.innerHTML = "";   
    container.appendChild(imgPlayer); 
    container.appendChild(text);
    container.appendChild(imgComputer);
}

function score(participant) {
    won(participant)
}

function draw() { console.log("draw") }

function won(participant) {
    const text = document.createElement("h1");
    const champion = participant.toUpperCase();
    document.querySelector(".modal").classList.toggle("show-modal");
    text.appendChild(document.createTextNode(champion));
    document.getElementById("winner").appendChild(text);
}

function restart() {
    document.querySelector(".modal").classList.toggle("show-modal");
    document.getElementById("moves").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
}