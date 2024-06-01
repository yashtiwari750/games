//declaring the length and class name to be selected
let number = document.querySelectorAll(".drum").length;
let r = ".drum";


//function for the button pressed
for(let i =0;i<number;i++){
document.querySelectorAll(r)[i].addEventListener("click",function(){
    var c = this.innerHTML;
    makesound(c);
    buttonanimation(c);
});
}



// its an asynchronous function that return something thats why its should be last or dont place 
 // above the alert it doesnt work 



// now make a function adding the sounds to each buttton 
//function for the key pressed
document.querySelector("body").addEventListener("keypress",function(dets){
    makesound(dets.key);
     buttonanimation(dets.key);
});

//function which make the sound for the button and key pressed 
function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;


        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;


        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;


        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;



        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(dets.key);
    }
}

function buttonanimation(ke){
    console.log(ke)
  var activebutton =   document.querySelector(`.${ke}`);
  activebutton.classList.add("pressed");
  activebutton.setTimeout(() => {
    activebutton.classList.remove("pressed");
  }, 100);

}