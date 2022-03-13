const carouselTrack = document.querySelector(".carousel-track");
const slides = Array.from(carouselTrack.children);
const prevBtn = document.querySelector(".carousel-btn-prev");
const nextBtn = document.querySelector(".carousel-btn-next");
const carouselNav = document.querySelector(".carousel-nav");
const indicators = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setSlidePosition);

// function for moving to next or prev slide
const moveToSlide = (carouselTrack, currentSlide, targetSlide) => {
    carouselTrack.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

// hide/show prev and next btn
const toggleArrowVisibility = (clickedIndicatorIndex, prevBtn, nextBtn, slides) => {
    if (clickedIndicatorIndex === 0) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    } else if (clickedIndicatorIndex === slides.length -1) {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
};

// update indicators
const updateCurrentIndicator = (currentIndicator, clickedIndicator) => {
    currentIndicator.classList.remove("current-slide");
    clickedIndicator.classList.add("current-slide");
}

// move to prev slide on prev btn click
prevBtn.addEventListener("click", e => {
    const currentSlide = carouselTrack.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(carouselTrack, currentSlide, prevSlide);

    // update indicator
    const currentIndicator = carouselNav.querySelector(".current-slide");
    const prevIndicator = currentIndicator.previousElementSibling;
    updateCurrentIndicator(currentIndicator, prevIndicator);

    // update prev and next btn 
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    toggleArrowVisibility(prevIndex, prevBtn, nextBtn, slides);
});

// move to next slide on next btn click
nextBtn.addEventListener("click", e => {
    const currentSlide = carouselTrack.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(carouselTrack, currentSlide, nextSlide);

    // update indicator
    const currentIndicator = carouselNav.querySelector(".current-slide");
    const nextIndicator = currentIndicator.nextElementSibling;
    updateCurrentIndicator(currentIndicator, nextIndicator);

    // update prev and next btn 
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    toggleArrowVisibility(nextIndex, prevBtn, nextBtn, slides);
});

// move to slide on indicator btn click
carouselNav.addEventListener("click", e => {
    const clickedIndicator = e.target.closest("button");

    if (!clickedIndicator) return;

    const currentSlide = carouselTrack.querySelector(".current-slide");
    const currentIndicator = carouselNav.querySelector(".current-slide");
    const clickedIndicatorIndex = indicators.findIndex(indicatorIndex => indicatorIndex === clickedIndicator);

    const targetSlide = slides[clickedIndicatorIndex];

    moveToSlide(carouselTrack, currentSlide, targetSlide);
    updateCurrentIndicator(currentIndicator, clickedIndicator);

    // update prev and next btn 
    toggleArrowVisibility(clickedIndicatorIndex, prevBtn, nextBtn, slides);
})
