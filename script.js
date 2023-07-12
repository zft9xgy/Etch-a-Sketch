/* get main container */
const theGrid = document.getElementById("the-grid");
const numPixels = 16;
/* pixel border = 1 px and padding = 9px so pixel is 20x20px */
// can i get padding and border value from javascript?
const maxDimension = numPixels * 20;

function createsTheGrid() {
	for (let i = 0; i < numPixels * numPixels; i++) {
		const pixel = document.createElement("div");
		pixel.classList.add("pixel");
		theGrid.appendChild(pixel);
	}
	theGrid.style = `grid-template-columns: repeat(${numPixels}, 1fr);`;
}
createsTheGrid();

/* UI */

const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) =>
	pixel.addEventListener("mouseover", (e) => fillPixel(e.target))
);

function fillPixel(pixel) {
	pixel.classList.add("bg-pixel");
	//pixel.style = "background-color: white;";
	//pixel.style = `background-color: #${getRandomColor()};`;
}

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

/* reset background of the grid pixels. background-color is hardcode  */
function resetDraw() {
	pixels.forEach((pixel) => pixel.classList.remove("bg-pixel"));
}
