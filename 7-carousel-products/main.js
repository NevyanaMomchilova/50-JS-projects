const carouselProductsContainer = document.querySelector(".carousel-products-container");

const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");

let carouselProductsContainerWidth = carouselProductsContainer.getBoundingClientRect().width;

btnPrevious.addEventListener("click", () => {
    carouselProductsContainer.scrollLeft -= carouselProductsContainerWidth;
});

btnNext.addEventListener("click", () => {
    carouselProductsContainer.scrollLeft += carouselProductsContainerWidth;
});

