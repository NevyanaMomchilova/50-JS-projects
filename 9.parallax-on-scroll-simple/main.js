const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    let offsetY = window.pageYOffset;
    parallax.style.backgroundPositionY = offsetY * 0.7 + "px";
});