const drawingArea = document.getElementById("drawing-area");
const inkBlack = document.getElementById('ink-black');
const inkColour = document.getElementById('ink-colour');
const inkEraser = document.getElementById('ink-eraser');
let slider = document.getElementById("slider");
let zoomValue = document.getElementById("zoom-output");
    zoomValue.innerHTML = slider.value;
let zoomValue_let = zoomValue.HTML
let defaultZoom = 10
makeRows(defaultZoom, defaultZoom);


function makeRows(rows, columns) {
    drawingArea.style.setProperty('--grid-rows', rows);
    drawingArea.style.setProperty('--grid-columns', columns);

  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div") 
    //cell.innerText = (i + 1); // numbered grids (test)
    inkBlack.addEventListener('click', function onClick(event) {
        cell.onmouseover = function() {
            cell.style.backgroundColor = 'black'
        }
    });
    inkColour.addEventListener('click', function onClick(event) {
        cell.onmouseover = function() {
            cell.style.backgroundColor = 'green' //temp colour
        }
    });
    inkEraser.addEventListener('click', function onClick(event) {
        cell.onmouseover = function() {
            cell.style.backgroundColor = 'white'
        }

    });
    drawingArea.appendChild(cell).className = "grid-item";
  }

}

slider.oninput = function() {
    if (this.value > 0) {
      document.getElementById("drawing-area").innerHTML = "";
      //clears container to prevent grid from being created everytime
      //the slider is moved
      zoomValue.innerHTML = this.value;
      zoomValue_let = zoomValue.innerHTML;
      makeRows(this.value, this.value);
    }

}

//const drawingDiv = document.getElementsByClassName("grid-item");





