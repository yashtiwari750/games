let time = 60;
var nr = "";
var scr = 0;
var hit;

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 234; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class ="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

// making the timer 
function timer() {
    let tim = setInterval(function () {
        if (time >= 0) {
            document.querySelector("#timeint").textContent = time;
            time--;
        } else {
            clearInterval(tim);
            alert("Time out");
        }
    }, 1000);
}

// making the hit random
function newhit() {
    nr = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").textContent = nr;
}

// making the score increase mechanism
function score() {
    scr = scr + 10;
    document.querySelector(".kt").textContent = scr;
}

// adding the event listener to pbtm
function logic() {
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        // Ensure the clicked element is a bubble
        if (dets.target.classList.contains("bubble")) {
            hit = Number(dets.target.textContent);
            console.log("hi " + hit);
            console.log("hello " + nr);
            if (hit === nr) {
                score();
            }
            newhit();
            makebubble();
        }
    });
}


makebubble();
timer();
newhit();
logic();
