var slider = new nav(["images/widgets/chick1.png", "images/widgets/swill.png", "images/widgets/chick2.jpg", "images/widgets/appointment.jpg",]);

function nav(arr) {
    var current = -1, len = arr.length - 1;
    this.next = function () {
        current =  current < len ? current + 1 : 0;
        var slide = document.createElement('img');
        slide.src = arr[current];
        slide.id = "slide_img";
        return slide;
    };
    this.prev = function () {
        current = current > 0 ? current - 1 : len;
        var slide = document.createElement('img');
        slide.src = arr[current];
        slide.id = "slide_img";
        return slide;
    };
}


// function sliderPlay() {
//     result.innerHTML = slider.next();
//     timer = setTimeout(sliderPlay, 1000);
// }

next.onclick = function () {
    if(document.getElementById("slide_img")){
        result.removeChild(document.getElementById("slide_img"));
    }
    result.appendChild(slider.next());
};

prev.onclick = function () {
    if(document.getElementById("slide_img")){
        result.removeChild(document.getElementById("slide_img"));
    }
    result.appendChild(slider.prev());
};

// play.onclick = function () {
//     if (timer) return;
//     sliderPlay();
// };

// pause.onclick = function () {
//     clearTimeout(timer);
//     timer = 0;
// };

// window.onload = sliderPlay;
window.onload = next.click();