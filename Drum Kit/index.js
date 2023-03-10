var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// adding event listner to all drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var expression = this.innerHTML;
        makeSound(expression);
        makeAnimation(expression);
    });
}

// adding keydown event listner
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    makeAnimation(event.key);
});

// to make sound according to pressed key or drum button
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

// to make animation according to pressed key or drum button
function makeAnimation(key) {
    var activeButton = document.querySelector("." + key);

    // adding a class i.e. pressed
    activeButton.classList.add("pressed");

    // removing the class i.e. pressed after 1 sec.
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}