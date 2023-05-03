counter = 0
function switchImage() {
    if (counter == 0) {
        document.getElementById("switch").src = "pics/on_switch.png";
        fadeInElement(document.getElementById("logo"))
        counter = 1;

        setTimeout(() => { fadeOutElement(document.getElementById("switch")) }, 500);
        setTimeout(() => { fadeInElement(document.getElementById("bg")) }, 1500);
        setTimeout(() => { fadeInElement(document.getElementById("switch")) }, 2500);
        setTimeout(() => { document.getElementById("switch").src = "pics/arrow.png" }, 2500);

        document.getElementById("everything_else_div").style.display = "flex";
    }
}

function fadeInElement(element) {
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.1
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 15);
}

function fadeOutElement(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity = opacity - 0.1
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}