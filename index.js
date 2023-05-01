counter = 0
function switchImage(element) {
    if (counter == 0) {
        fadeInLogo()
        setTimeout(() => { fadeOutSwitch() }, 500);
        setTimeout(() => { fadeInBG() }, 1500);
    }
}

function fadeInLogo() {
    document.getElementById("switch").src = "on_switch.png";
    var logo = document.getElementById("logo");
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.1
            logo.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 15);
}

function fadeOutSwitch() {
    var light_switch = document.getElementById("switch");
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity = opacity - 0.1
            light_switch.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 30);
    counter = 1;
}

function fadeInBG() {
    var bg = document.getElementById("bg");
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.1
            logo.style.opacity = opacity;
            bg.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 15);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}