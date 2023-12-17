// this is to detect the click:

var noButton = document.querySelectorAll(".drum").length;
for (var i = 0; i<noButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    })

}


// this is to detect the button pressed:
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// This to make the sound:
function makeSound (key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play()
            break;

            case "a":
                var audio = new Audio("./sounds/tom-2.mp3")
                audio.play()
                break;

            case "s":
                var audio = new Audio("./sounds/tom-3.mp3")
                audio.play()
                break;

            case "d":
                var audio = new Audio("./sounds/tom-4.mp3")
                audio.play()
                break;
            case "j":
                var audio = new Audio("./sounds/snare.mp3")
                audio.play()
                break;

            case "k":
                var audio = new Audio("./sounds/crash.mp3")
                audio.play()
                break;

            case "l":
                var audio = new Audio("./sounds/snare.mp3")
                audio.play()
                break;
        default: console.log(buttonPressed)
            break;
    }
}

function buttonAnimation(key){
    var activator = document.querySelector("."+key);
    activator.classList.add("pressed");
    setTimeout(function(){
        activator.classList.remove("pressed")
    }, 100);
}