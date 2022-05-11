let change = document.getElementById('change');

function changeBg() {
    console.log('runs');
    let r = (Math.floor(Math.random() * 256));
    let g = (Math.floor(Math.random() * 256));
    let b = (Math.floor(Math.random() * 256));
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor);
    change.style.background = bgColor;
}