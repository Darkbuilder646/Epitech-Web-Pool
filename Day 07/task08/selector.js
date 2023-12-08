const hyperlinks = document.querySelectorAll('a:not([target="_blank"])');

hyperlinks.forEach(element => {
    element.style.opacity = 0.5;
});

console.log(hyperlinks);
