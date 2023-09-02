const container = document.querySelector('.container');
let gridSize = 16;

function createGrid () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (i = 1; i <= gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        container.appendChild(gridRow);
        for (j = 1; j <= gridSize; j++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'gray';
            })
            // grid.textContent = `${j}`;
            gridRow.appendChild(grid);
        }
    }
}

const sidesSelect = document.querySelector('.sides-select');
sidesSelect.addEventListener('click', () => {
    do {
        gridSize = Number(prompt("Grid size: ", "16"));
    } while (gridSize >= 100);
    createGrid();
})

createGrid ();


