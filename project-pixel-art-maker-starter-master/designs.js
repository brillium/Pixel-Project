// Inputs
const colorPicker = document.getElementById('colorPicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');


//Grid Construction
function makeGrid() {
    for (let x = 0; x < inputHeight.value; x++) {
        let grid = pixelCanvas.insertRow(x);
        for (let y = 0; y < inputWidth.value; y++) {
            let dot = grid.insertCell(y);
//Color
dot.addEventListener('click', function() {
    dot.style.backgroundColor = colorPicker.value})
        }
    }
}
//Clear Grid
sizePicker.addEventListener('submit', function(clear) {
    clear.preventDefault();
    pixelCanvas.innerHTML = '';
    makeGrid();
})


   

  
