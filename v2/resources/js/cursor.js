// CURSOR
const cursor = document.querySelector(".cursor");

function onMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    const target = e.target;
    if (target.tagName === "A") {
        cursor.classList.add("hover");
    } else {
        cursor.classList.remove("hover");
    }
}

window.addEventListener("mousemove", onMouseMove);
