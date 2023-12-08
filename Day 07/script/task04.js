const buttonPlus = document.querySelector("footer div button:first-of-type");
const buttonMinus = document.querySelector("footer div button:last-of-type");
let bodyFontSize = 16;

buttonPlus.addEventListener('click', () => {
    bodyFontSize += 1;
    document.body.style.fontSize = bodyFontSize + "px"; 
});

buttonMinus.addEventListener('click', () => {
    bodyFontSize -= 1;
    document.body.style.fontSize = bodyFontSize + "px";
});

const colorSelector = document.querySelector("footer div select");
colorSelector.addEventListener('change', () => {
    const thisColor = colorSelector.value;
    document.body.style.backgroundColor = thisColor;
});
