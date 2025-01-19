// Get the canvas element and the 2D drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Variables to track mouse position and whether the user is drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Function to start drawing
function startDrawing(event) {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Function to draw on the canvas
function draw(event) {
    if (!isDrawing) return; // Don't draw if the mouse is not pressed

    ctx.beginPath(); // Start a new path
    ctx.moveTo(lastX, lastY); // Move to the last mouse position
    ctx.lineTo(event.offsetX, event.offsetY); // Draw to the current mouse position
    ctx.stroke(); // Apply the stroke (draw the line)

    lastX = event.offsetX; // Update the last position
    lastY = event.offsetY;
}

// Event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Clear canvas function
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas
});