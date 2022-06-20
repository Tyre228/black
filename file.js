let overimage = document.querySelector('.overimage');
let footer = document.querySelector("footer");
var width;
function imageChanger() {
    setTimeout(classChanger, 1500)
}
function classChanger() {
    overimage.className = "overimage overimage_invisited";
}
overimage.addEventListener("load", imageChanger());


setInterval(windowWidth, 500)
function windowWidth() {
    width = window.innerWidth;
    console.log(width)
    footer.innerHTML = `<footer>${width}</footer>`
}