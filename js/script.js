// Typing Animation
const text = "ColdFusion Full Stack Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}
typeEffect();

// Navbar scroll effect
window.addEventListener("scroll", function () {
    document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});