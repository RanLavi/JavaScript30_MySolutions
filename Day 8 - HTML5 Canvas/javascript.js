const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'exclusion'; // For overlapping strokes

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // hsl variable
let direction = true; // Bigger

function draw(e) {
    if(!isDrawing) return; // Mouse isn't pressed down, stop function
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Saturation and lightness
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Starting point
    ctx.lineTo(e.offsetX, e.offsetY); // Ending point, extracted from the event
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Resetting the starting point, by destructuring an array

    hue++; // Changing hue according to hsl
    if (hue >= 360){
      hue = 0; // Going over 360 won't cause an error, but this is good practice
    }
    if (ctx.lineWidth >= 200 || ctx.lineWidth <= 10){ // Flip direction bigger/smaller
      direction = !direction;
    }
    if (direction){ // Bigger
      ctx.lineWidth++;
    }
    else { // Smaller
      ctx.lineWidth--;
    }
}

// Mouse is pressed, drawing is enabled to when we move the mouse and strating points are being reset
canvas.addEventListener('mousedown', (e) => { 
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}); 

canvas.addEventListener('mousemove', draw); // Moving the mouse calls the draw function
canvas.addEventListener('mouseup', () => isDrawing = false); // Mouse isn't pressed, drawing is disabled
canvas.addEventListener('mouseout', () => isDrawing = false); // Mouse leaves canvas, drawing is disabled. Otherwise it will resume drawing once returned to the canvas