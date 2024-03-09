var numberOfButtons = document.querySelectorAll("button").length;

var soundList = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
];

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // Play the sound
        var audio = new Audio(soundList[i]);
        audio.play();

        // Change the text color
        this.style.color = 'white';
    });
}

/*
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
*/

/*function handleClick() {
    alert("I got clicked!");
}
*/