const container = document.querySelector('.container');

for (i = 1; i <= 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    container.appendChild(gridRow);
    for (j = 1; j <= 16; j++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        grid.textContent = `${j}`;
        gridRow.appendChild(grid);
    }
}




