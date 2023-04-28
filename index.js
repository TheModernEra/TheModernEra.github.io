counter = 0
function switchImage(element) {
    if (counter == 0) {
        element.src = "on_switch.png";
        var fade = document.getElementById("logo");
        var opacity = 0;
        var intervalID = setInterval(function() {
            if (opacity < 1) {
                opacity = opacity + 0.1
                fade.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 15);
        function test1() {
            var opacity2 = 1;
            var interval = setInterval(function() {
                if (opacity2 > 0) {
                    opacity2 = opacity2 - 0.1
                    element.style.opacity = opacity2;
                } else {
                    clearInterval(interval);
                }
            }, 30);
            counter = 1;
        }
        
        setTimeout(() => { test1() }, 1000);
    }
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }