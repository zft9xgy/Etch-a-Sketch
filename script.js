/* get main container */
const theGrid = document.getElementById("the-grid");
const defaultGridSize = 16;
var pixels = ""; // init pixels nodelist. it will be filled in createsTheGrid();

/* Return nodelist with all the pixels */
function getQueryPixels() {
	return document.querySelectorAll(".pixel");
}

function createsTheGrid(gridSize) {
	emptyGrid();
	for (let i = 0; i < gridSize * gridSize; i++) {
		const pixel = document.createElement("div");
		pixel.classList.add("pixel");
		theGrid.appendChild(pixel);
	}
	theGrid.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;
	pixels = getQueryPixels();
	addListenerToPixels();
}

function emptyGrid() {
	theGrid.innerHTML = "";
}

/* UI */

function addListenerToPixels() {
	pixels.forEach((pixel) =>
		pixel.addEventListener("mouseover", (e) => fillPixel(e.target))
	);
}

/* get info from rainbow checkbox */
function isRainbowMode() {
	return document.getElementById("rainbow").checked;
}

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

/* reset background of the grid pixels. background-color is hardcode  */
function resetDraw() {
	pixels.forEach((pixel) => pixel.classList.remove("bg-pixel"));
	pixels.forEach((pixel) => (pixel.style = "background-color: inherit;"));
}

/* UI logic for change canva size from button that pop up an alter to prompt */

const setSizeButton = document.getElementById("btn-set-size");
setSizeButton.addEventListener("click", changeCanvasSize);

function changeCanvasSize(size) {
	const newSize = parseInt(prompt("Introduzca numero [1-100]: "));
	const regValidation = /^[1-9]$|^[1-9][0-9]$|^(100)$/;

	if (!regValidation.test(newSize)) {
		return alert("ERROR. Se espera número del 1 al 100.");
	}

	createsTheGrid(newSize);
}

/* las funciones que trabajan con el color son fillpixel y reset draw*/
function fillPixel(pixel) {
	if (isRainbowMode()) {
		pixel.style = `background-color: #${getRandomColor()};`;
		return;
	}
	pixel.style = `background-color: none;`; // this allow paint white over rainbow
	pixel.classList.add("bg-pixel");
}

createsTheGrid(defaultGridSize);
