const drawingArea = document.getElementById("drawing-area");

//let output = document.getElementById("value");
//let outputVariableNo = document.getElementById("outputVariable");
//let rows = document.getElementById("slider").value;
//let columns = document.getElementById("slider").value;
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
    let cell = document.createElement("div");
    //cell.innerText = (i + 1); // numbered grids (test)
    drawingArea.appendChild(cell).className = "grid-item";
  };
};

slider.oninput = function() {
    if (this.value > 0) {
      document.getElementById("drawing-area").innerHTML = "";
      zoomValue.innerHTML = this.value;
      zoomValue_let = zoomValue.innerHTML;
      makeRows(this.value, this.value);
    }

}


