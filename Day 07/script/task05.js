const canvasWindow = document.querySelector("canvas");
const contextCanvas = canvasWindow.getContext("2d");

contextCanvas.fillStyle = "white";

//* Point 1
const x1 = 6;
const y1 = 6;
//* Point 2
const x2 = 14;
const y2 = 10;
//* Point 3
const x3 = 6;
const y3 = 14;

contextCanvas.beginPath();
contextCanvas.moveTo(x1, y1);
contextCanvas.lineTo(x2, y2);
contextCanvas.lineTo(x3, y3);
contextCanvas.lineTo(x1, y1);
contextCanvas.closePath();

contextCanvas.fill();

const pauseButton = document.querySelector("div button:nth-of-type(1)");
const stopButton = document.querySelector("div button:nth-of-type(2)");
const muteButton = document.querySelector("div button:nth-of-type(3)");

const audioFile = new Audio("../audio/Coalescence-Risk-of-Rain.mp3")

canvasWindow.addEventListener('click', () => {
    audioFile.play();
});

pauseButton.addEventListener('click', () => {
    console.log("Pause");
    audioFile.pause();
});

stopButton.addEventListener('click', () => {
    console.log("Stop");
    audioFile.pause();
    audioFile.currentTime = 0;
});

muteButton.addEventListener('click', () => {
    console.log("Mute");
    if (audioFile.muted) {
        audioFile.muted = false;
        muteButton.textContent = "Mute";
    } else {
        audioFile.muted = true;
        muteButton.textContent = "Unmute";
    }
});
