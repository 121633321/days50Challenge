const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let init = setInterval(blurring, 15);
function blurring() {
    load++;
    if (load > 99) {
        clearInterval(init);
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`

}