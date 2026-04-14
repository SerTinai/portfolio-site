const heroImage = document.getElementById("heroImage");
const mainContent = document.getElementById("mainContent");

let isOpened = false;

heroImage.addEventListener("click", () => {
    if (isOpened) return;

    isOpened = true;

    heroImage.classList.add("active");
    mainContent.classList.add("show");

    setTimeout(() => {
        mainContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 350);
});