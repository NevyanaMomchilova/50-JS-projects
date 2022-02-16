const progressBar = document.querySelector("#progress-bar");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

btnPrev.addEventListener("click", () => {
    if (currentActive > 1) {
        currentActive--;
    }
    updateProgressBar();
});

btnNext.addEventListener("click", () => {
    if (currentActive < circles.length) {
        currentActive++;
    }
    updateProgressBar();
});

updateProgressBar = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const activeCircles = document.querySelectorAll(".active");

    progressBar.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive == 1) {
        btnPrev.disabled = true;
    } else if (currentActive == circles.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
};


