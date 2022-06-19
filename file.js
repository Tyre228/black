var overimage = document.querySelector(".overimage");
function imageChanger() {
    setTimeout(function classChanger() {overimage.className = "overimage overimage_invisited";}, 3000)
}
overimage.addEventListener("load", imageChanger())