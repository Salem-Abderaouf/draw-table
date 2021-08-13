const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
const colorValue = document.getElementById('color-picker');
const fontValue = document.getElementById('font-size');
const clearbtn = document.getElementById('clear-btn')
let defaultPenSize = 2;
let defaultColor = "#000"
let isClicked = false;

// Adjust cursor position inside canvas
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}

clearbtn.addEventListener('click', () => { ctx.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth); })
colorValue.addEventListener('change', () => { defaultColor = colorValue.value })
fontValue.addEventListener('change', () => { defaultPenSize = fontValue.value })
canvas.onclick = () => { isClicked = !isClicked; }
// Draw function 
canvas.addEventListener('mousemove', (e) => {
    if (isClicked) {
        let pos = getMousePos(canvas, e);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, defaultPenSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = defaultColor;
    }
})