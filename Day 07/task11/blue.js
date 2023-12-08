function addBlueClassOnHover(paragraph) {
    paragraph.addEventListener('mouseenter', function () {
        paragraph.classList.add('blue');
    });

    paragraph.addEventListener('mouseleave', function () {
        paragraph.classList.remove('blue');
    });
}

function toggleHighlightedClassOnClick(paragraph) {
    paragraph.addEventListener('click', function () {
        paragraph.classList.toggle('highlighted');
    });
}

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    addBlueClassOnHover(paragraph);
    toggleHighlightedClassOnClick(paragraph);
});