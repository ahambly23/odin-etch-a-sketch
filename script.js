const input = document.querySelector("input");
const create = document.querySelector("#create");

create.addEventListener("click", () => {
    const inputValue = input.value;

    const gridSize = 960;
    let numOfSquares = inputValue;

    const container = document.querySelector("#container");

    container.innerHTML = '';

    container.style.width = `${gridSize}px`;
    container.style.width = `${gridSize}px`;

    function setBackgroundColor() {
        this.style.backgroundColor = "black";
    }

    function createGrid() {
        const total = (numOfSquares * numOfSquares)
        const cellHeightAndWidth = `${(gridSize / numOfSquares) - 2}`

        for (let x = 0; x < total; x++) {
            const cell = document.createElement("div");

            cell.style.width = `${cellHeightAndWidth}px`;
            cell.style.height = `${cellHeightAndWidth}px`;
            cell.classList.add("cell");

            container.appendChild(cell);
            cell.addEventListener("mouseover", setBackgroundColor);
        }
    }
    createGrid();
})