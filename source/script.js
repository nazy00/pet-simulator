const heart = document.getElementById("heart");

setInterval(heartDown(), 30000);

function setHeart() {
    heart.innerHTML = 10;
}
function heartUp() {
    var number = heart.innerHTML;
    number++;
    heart.innerHTML = number;
}
function heartDown() {
    var number = heart.innerHTML;
    number--;
    heart.innerHTML = number;
}
