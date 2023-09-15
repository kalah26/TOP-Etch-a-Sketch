const sketchPad = document.querySelector('#sketchpad')
const buttons = document.querySelectorAll('button')
let SIZE = 8;

function makeSketch() {
    sketchPad.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`
    sketchPad.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`
    for (let i = 0; i < SIZE*SIZE; i++) {
        const sketchGrid = document.createElement('div');
        sketchGrid.classList.add('grid')
        sketchPad.appendChild(sketchGrid);
    }
}
makeSketch()

const grids = document.querySelectorAll('.grid')

buttons.forEach(button => button.addEventListener('click', (e)=> {
    if (e.target.value === 'dark') {
        grids.forEach(grid => grid.addEventListener('mouseover', darken))
    } else if (e.target.value === 'rainbow') {
        grids.forEach(grid => grid.addEventListener('mouseover', colorize))
    }
}))

function colorize() {
    this.classList.add('color')
    this.classList.remove('dark')
    this.classList.remove('eraser')
}

function darken() {
    this.classList.add('dark')
    this.classList.remove('color')
    this.classList.remove('eraser')
}
