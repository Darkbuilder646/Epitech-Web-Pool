const whiteBox = document.querySelector("footer > div");
let textLetter = "";

window.addEventListener('keydown', (event) => {
    const keyboardKey = event.key;
    textLetter += keyboardKey;
    if (textLetter.length > 42){
        textLetter = textLetter.slice(-42);
        console.log(textLetter);
    }
    whiteBox.textContent = textLetter;
});
