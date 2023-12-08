let userInput = ""
const whiteBox = document.querySelector("footer > div");
whiteBox.textContent = "What's your name ?";
whiteBox.addEventListener('click', () => {
    while (userInput == "")
    {
        userInput = prompt("Enter your name here");
    }
    if (userInput != null)
    {
        const confirmEvent = window.confirm("Are you sure that " + userInput + " is your name ?");
        if (confirmEvent) {
            alert("Hello " + userInput);
            whiteBox.textContent = userInput;
            userInput = "";
        }
        else {
            userInput = "";
        }
    }
    

});




