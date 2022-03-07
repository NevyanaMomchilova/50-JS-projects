const openModalButtons = document.querySelectorAll("[data-modal-open]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const overlay = document.querySelector("#overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.dataModalOpen);
        openModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

openModal = (modal) => {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
};

çloseModal = (modal) => {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
