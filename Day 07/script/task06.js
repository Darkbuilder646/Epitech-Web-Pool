const square = document.querySelector("canvas");
const whiteBox = document.querySelector("footer > div:first-of-type");
const coordinatesBox = document.querySelector("footer > div:last-of-type");

let coordinates = { x:0, y:0 };
let isDragging = false;

document.addEventListener('mousemove', (event) => {
    if(isDragging) {
        const x = event.clientX - whiteBox.getBoundingClientRect().left - coordinates.x;
        const y = event.clientY - whiteBox.getBoundingClientRect().top - coordinates.y;
        
        square.style.left = x + "px";
        square.style.top = y + "px";

        coordinatesBox.textContent = `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`;
    }
});

document.addEventListener('mousedown', (event) => {
    isDragging = true;
    coordinates.x = event.clientX - square.getBoundingClientRect().left;
    coordinates.y = event.clientY - square.getBoundingClientRect().top;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});


