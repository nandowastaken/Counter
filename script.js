let number = 0;
const counter = document.getElementById("number");

function changeColor() {
    if (number > 0) {
        counter.style.color = "green";
    } else if (number < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "hsl(209, 61%, 16%)";
    }
}

function increase() {
    number++;
    counter.innerHTML = number;
    changeColor();
    
}

function decrease() {
    number--;
    counter.innerHTML = number;
    changeColor();
}

function reset() {
    number = 0;
    counter.innerHTML = number;
    changeColor();
}

counter.innerHTML = number;