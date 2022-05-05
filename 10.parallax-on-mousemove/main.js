function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;

        // also working:
        // x = (e.pageX * speed) / 100;
        // y = (e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
};

document.addEventListener("mousemove", parallax);

