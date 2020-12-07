const img = document.querySelector("img");
const icons = document.querySelector(".icons");
img.onclick = function() {
    this.classList.toggle("active");
    icons.classList.toggle("active");
}