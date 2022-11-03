console.log("app.js is running 🎉");

function changeColor(bodyColor, fontColor) {
    console.log(bodyColor);
    document.querySelector("body").style.backgroundColor = bodyColor;
    document.querySelector("body").style.color = fontColor;
}

// ========= Event Listeners ========= //
document.querySelector("#btn-blue").addEventListener("click", function () {
    changeColor("blue", "white");
});
document.querySelector("#btn-red").addEventListener("click", function () {
    changeColor("cornsilk", "grey");
});
document.querySelector("#btn-yellow").addEventListener("click", function () {
    changeColor("yellow", "blue");
});
document.querySelector("#btn-reset").addEventListener("click", function () {
    changeColor("", "");
});
