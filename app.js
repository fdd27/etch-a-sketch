//Assing variable for container div and create the initial grid
const container = document.querySelector('#container');
let dimensions = 16;
createGrid(dimensions);

//Listener for the clear button
const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    clearGrid();
    createGrid(dimensions);
});

//Create the divs and add them to the container
function createGrid(d){
    dimensions = d;
    container.style.cssText = `grid-template-columns: repeat(${d}, 1fr); grid-template-rows: repeat(${d}, 1fr)`;

    for (i=0; i<d**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("id", "square");
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
}

//Generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Slider function to change the text and recreate the grid
function sliderChange(value) {
    let gridLabels = document.querySelectorAll('#range-value');

    gridLabels.forEach(((lbl) => {
        lbl.textContent = value;
    }))

    let dn = parseInt(value);
    dimensions = dn;
    clearGrid();
    createGrid(dn);
}

//Clear the grid
function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}