const heart = document.getElementById("heart");

setInterval(heartDown, 3000);

function heartUp() {
    let number = heart.innerHTML;
    if (number < 10) {
        number++;
        heart.innerHTML = number;
    }
}
function heartDown() {
    let number = heart.innerHTML;
    if (number > 0) {
        number--;
        heart.innerHTML = number;
    }
}
