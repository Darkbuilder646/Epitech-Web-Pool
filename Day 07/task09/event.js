const firstButton = document.querySelector("button:first-of-type");
const paragraph = document.querySelectorAll("p");

firstButton.addEventListener('click', () => {
    paragraph.forEach(element => {
        element.remove();
    });
});