let goToTopButton = document.querySelector(".go-to-top-button");

window.addEventListener("scroll", () => {
    window.scrollY === 0 ? goToTopButton.classList.remove("-active") : goToTopButton.classList.add("-active");
});

goToTopButton.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
