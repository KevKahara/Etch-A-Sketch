const container = document.getElementById('grid-container');

function createGrid(rows, columns) {
    container.textContent = '';

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    const totalCells = rows * columns;

    for(let i = 0; i < totalCells; i++) {

        const cell = document.createElement('div');
        cell.classList.add('grid-item');

        container.appendChild(cell);
    }
}

createGrid(16, 16);

container.addEventListener('mouseenter', () => {
    container.style['backgroundColor'] = 'red';

})