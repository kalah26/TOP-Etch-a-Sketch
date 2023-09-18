const squareNumber = document.getElementById('squareNumber');
const sketchPad = document.getElementById('sketchpad')
const sliderValue = document.getElementById('sliderValue')
const slider = document.getElementById('squareNumber')
const darkButton = document.getElementById('darkButton')
const rainbowButton = document.getElementById('rainbowButton')
const eraserButton = document.getElementById('eraserButton')
const resetButton = document.getElementById('resetButton')

const DEFAULT_SIZE = slider.value;
const DEFAULT_COLOR = 'blank'
let size = newSize = DEFAULT_SIZE;
let color = DEFAULT_COLOR;

//default size displayed under the slider
sliderValue.textContent = `${slider.value} x ${slider.value}`;

function makeSketch(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const sketchGrid = document.createElement('div');
        sketchGrid.classList.add('grid')
        sketchGrid.addEventListener('mouseover', setColor)
        sketchPad.appendChild(sketchGrid);
    }
}

darkButton.addEventListener('click',()=> {color='black'})
rainbowButton.addEventListener('click',()=> {color='rainbow'})
eraserButton.addEventListener('click',()=> {color='blank'})
resetButton.addEventListener('click',()=> {
    reloadSketch()
    color = DEFAULT_COLOR;
})

slider.oninput = function() {
    sliderValue.textContent = `${this.value} x ${this.value}`
    newSize = this.value;
    reloadSketch()
}

function changeSize(newSize) {
    size = newSize
}

function reloadSketch() {
    sketchPad.innerHTML = "" //clearing sketchpad
    changeSize(newSize)
    makeSketch(size)
}

function setColor(e) {
    if (color === 'black') {
        e.target.style.backgroundColor = 'black'
    } else if (color === 'rainbow') {
        let rRed = Math.floor(Math.random()*256)
        let rGreen = Math.floor(Math.random()*256)
        let rBlue = Math.floor(Math.random()*256)
        e.target.style.backgroundColor = `rgb(${rRed},${rGreen},${rBlue})`
    } else if (color === 'blank') {
        e.target.style.backgroundColor = 'white'
    }
}

window.onload = ()=> {
    makeSketch(size)
}
