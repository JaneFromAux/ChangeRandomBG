let change = document.getElementById('change');

function changeBg() {
    console.log('runs');
    var r = Math.floor(Math.random() * 256);
    var g = 100 + Math.floor(Math.random() * 256);
    var b = 50 + Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor);
    change.style.background = bgColor;
}