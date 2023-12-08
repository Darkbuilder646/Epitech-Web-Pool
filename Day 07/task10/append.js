const addElementToDiv = document.getElementById("addItemButton");
addElementToDiv.addEventListener('click', () => {
    const inputUserContent = document.getElementById("listItem").value;
    const newDiv = document.createElement("div");
    newDiv.textContent = inputUserContent;

    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(newDiv);
});