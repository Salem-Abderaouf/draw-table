const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
let hexValue = document.getElementById('color-picker');
let fontValue = document.getElementById('font-size');
let defaultPenSize = 2;
let defaultColor = "#000"
let isClicked = false;


hexValue.addEventListener('change', () => { defaultColor = hexValue.value })
fontValue.addEventListener('change', () => { defaultPenSize = fontValue.value })
canvas.onclick = () => { isClicked = !isClicked; }
canvas.addEventListener('mousemove', (e) => {
    if (isClicked) {
        x = e.x;
        y = e.y;
        ctx.beginPath();
        ctx.arc(x, y, defaultPenSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = defaultColor;
    }
})