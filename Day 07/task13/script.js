//* Create Task
const taskForm = document.getElementById("taskForm");
const taskText = document.getElementById("taskText");
const taskType = document.getElementById("taskType");
const taskList = document.getElementById("taskList");

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let taskTextValue = taskText.value.trim();
    let typeOfTask = taskType.value;

    if(taskTextValue) {
        let listOfItem = document.createElement("li");
        listOfItem.textContent = taskTextValue;
        listOfItem.setAttribute("data-type", typeOfTask);

        if(typeOfTask === "note")
        {
            listOfItem.classList.add("note");
        } 
        else if (typeOfTask === "email") 
        {
            listOfItem.classList.add("email");
        }
        else if (typeOfTask === "todo")
        {
            listOfItem.classList.add("todo");
        }

        taskList.appendChild(listOfItem);
        taskTextValue.value = "";
        taskText.value = "";
    }
});

//* Search Task
const searchForm = document.getElementById("searchForm");
const searchType = document.getElementById("searchType");
const resetButton = document.getElementById("resetButton");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let selectedType = searchType.value;

    let items = taskList.querySelectorAll("li");
    items.forEach(element => {
        let itemType = element.getAttribute("data-type");
        
        if(selectedType === "all" || selectedType === itemType) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});

resetButton.addEventListener("click", () => {
    let items = taskList.querySelectorAll("li");
    items.forEach(element => {
        element.style.display = "block";
    });
    searchType.value = "all";
});

