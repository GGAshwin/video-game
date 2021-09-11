const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

/*function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}*/

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var audioElement = new Audio('Persona-5-OST-09-Beneath-the-Mas.mp3');
audioElement.pause()
//audioElement.play()


let test = document.getElementById('play')
/*test.addEventListener('click', () => {
    audioElement.play()

})*/
test.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
})
