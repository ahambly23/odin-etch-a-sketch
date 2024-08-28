const input = document.querySelector("input");
const create = document.querySelector("#create");
const container = document.querySelector("#container");

const rainbow = document.querySelector("#rainbow");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const pink = document.querySelector("#pink");
const green = document.querySelector("#green");
const black = document.querySelector("#black");
const eraser = document.querySelector("#eraser");

let currentMode = "black";

function getColor() {
    if (currentMode === 'rainbow') {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    } else if (currentMode === 'red') {
        return 'red';
    } else if (currentMode === 'green') {
        return 'green';
    } else if (currentMode === 'blue') {
        return 'blue';
    } else if (currentMode === 'pink') {
        return 'pink';
    } else if (currentMode === 'eraser') {
        return 'whitesmoke';
    } else {
        return 'black';
    }
}

function applyColor() {
    this.style.backgroundColor = getColor();
}

function createGrid(numOfSquares) {
    const gridSize = 500;

    container.innerHTML = '';

    container.style.width = `${gridSize}px`;
    container.style.width = `${gridSize}px`;

    const total = (numOfSquares * numOfSquares)
    const cellHeightAndWidth = `${(gridSize / numOfSquares) - 2}px`

    for (let x = 0; x < total; x++) {
        const cell = document.createElement("div");

        cell.style.width = cellHeightAndWidth;
        cell.style.height = cellHeightAndWidth;
        cell.classList.add("cell");

        cell.addEventListener("mouseover", applyColor);
        container.appendChild(cell);
    }
}

createGrid(16);

rainbow.addEventListener("click", () => {
    currentMode = 'rainbow';
});
red.addEventListener("click", () => {
    currentMode = 'red';
})
pink.addEventListener("click", () => {
    currentMode = 'pink';
})
green.addEventListener("click", () => {
    currentMode = 'green';
})
blue.addEventListener("click", () => {
    currentMode = 'blue';
})
black.addEventListener("click", () => {
    currentMode = 'black';
});
eraser.addEventListener("click", () => {
    currentMode = 'eraser';
});

create.addEventListener("click", () => {
    const inputValue = input.value;
    createGrid(inputValue);
    currentMode = 'black';
})