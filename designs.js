/*  Pixel Art Maker  */
// When size is submitted by the user, call makeGrid()
const pickerForm = document.getElementById('sizePicker');
pickerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
// Creates a grid that the user can interact with - makeGrid() function
function makeGrid() {
  // Select size input -- H & W values by Id 'inputHeight' & 'inputWidth'
  const heightValue = document.getElementById('inputHeight').value;
  const widthValue = document.getElementById('inputWidth').value;
  // Get a reference to the table by Id 'pixelCanvas' for the Grid
  const canvasTable = document.getElementById('pixelCanvas');
  // Empty grid
  canvasTable.innerHTML = "";
  // Insert rows from inputHeight
  for (let i = 0; i < heightValue; i++) {
    let newRow = canvasTable.insertRow(i);
    // Insert cells from inputWidth
    for (let j = 0; j < widthValue; j++) {
      let newCell = newRow.insertCell(j);
      // Click a cell in the grid to fill that cell with the chosen color
      newCell.addEventListener('click', function(){
        // Select color input - Color picker
        const colorValue = document.getElementById('colorPicker').value;
        newCell.style.backgroundColor = colorValue;
      });
    }
  }
}
