const heart = document.getElementById("heart");

setInterval(heartDown(), 30000);

function heartUp() {
    let number = heart.innerHTML;
    number++;
    heart.innerHTML = number;
}
function heartDown() {
    let number = heart.innerHTML;
    number--;
    heart.innerHTML = number;
}
