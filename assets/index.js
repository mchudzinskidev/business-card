const cardWrapper = document.querySelector(".cardWrapper");
const windowHeader = document.querySelector(".windowHeader");

let isDragging = false;
let startX = 0;
let startY = 0;
let initialX = 0;
let initialY = 0;

windowHeader.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    const rect = cardWrapper.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    initialX = rect.left;
    initialY = rect.top;
    cardWrapper.style.position = "fixed";
    cardWrapper.style.left = `${initialX}px`;
    cardWrapper.style.top = `${initialY}px`;
    cardWrapper.style.margin = "0";
    windowHeader.setPointerCapture(e.pointerId);
});

windowHeader.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    cardWrapper.style.left = `${initialX + deltaX}px`;
    cardWrapper.style.top = `${Math.max(initialY + deltaY, 0)}px`;
});

function stopDragging() {
    isDragging = false;
}

windowHeader.addEventListener("pointerup", stopDragging);
windowHeader.addEventListener("pointercancel", stopDragging);

const messageDom = document.getElementById("message");
document.getElementById("copyIcon").addEventListener("click", (event)=>{
    event.preventDefault();
    navigator.clipboard.writeText("mchudzinskidev@gmail.com");
    messageDom.style.bottom = "32px";
    setTimeout(() => {
        messageDom.style.bottom = "-38px";
    }, 2000);
});