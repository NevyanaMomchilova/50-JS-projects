let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountainsBehind = document.getElementById("mountains-behind");
let mountainsFront = document.getElementById("mountains-front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    stars.style.left = window.scrollY * 0.25 + "px";
    moon.style.top = window.scrollY * 1.05 + "px";
    mountainsBehind.style.top = window.scrollY * 0.5 + "px";
    mountainsFront.style.top = window.scrollY * 0 + "px";
    text.style.marginRight = window.scrollY * 4 + "px";
    text.style.marginTop = window.scrollY * 1.5 + "px";
    btn.style.marginTop = window.scrollY * 1.5 + "px";
    header.style.top = window.scrollY * 0.5 + "px";

});
