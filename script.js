function colorSchemeColor () {
    let color;

    if (colorScheme === 'black') {
        color = 0;
    } else if (colorScheme === 'random') {
        color = Math.floor(Math.random() * 255);
    }

    return color;
}

function addGridEvent (grid) {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${colorSchemeColor()}, ${colorSchemeColor()}, ${colorSchemeColor()})`;
    })
}

function createGrid (gridSize) {
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
            
            addGridEvent(grid);
            gridRow.appendChild(grid);
        }
    }
}

//global vars
const container = document.querySelector('.container');
let colorScheme = 'black';

//buttons
const sidesSelect = document.querySelector('.sides-select');
sidesSelect.addEventListener('click', () => {
    let gridSize;
    do {
        gridSize = Number(prompt("Grid size: ", "16"));
    } while (gridSize >= 100);
    createGrid(gridSize);
})

const blackBtn = document.querySelector('.black');
blackBtn.addEventListener('click', () => {
    colorScheme = 'black';
})

const randomBtn = document.querySelector('.random-color');
randomBtn.addEventListener('click', () => {
    colorScheme = 'random';
})

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    })
})

createGrid(16);
