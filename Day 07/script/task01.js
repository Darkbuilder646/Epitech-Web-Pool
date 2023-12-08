let numberOfClick = 0;

const whiteBox = document.querySelector("footer > div");
whiteBox.addEventListener('click', () => {
    numberOfClick ++;
    whiteBox.textContent = numberOfClick;
})