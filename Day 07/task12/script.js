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