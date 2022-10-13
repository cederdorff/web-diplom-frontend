// declaring a variable with a value
let message = "Hi Students";

// accessing the variable and logging it to the console
console.log(message);

// appending the value from the variable to thee DOM element #content
document.querySelector("#content").innerHTML = "Hello world!";

document.querySelector("body").style.backgroundColor = "red";

document.querySelector("#btn-click-me").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "yellow";
});

document.querySelector("#btn-prompt-name").addEventListener("click", function () {
    document.querySelector("#content").innerHTML = prompt("Please enter your name");
});
