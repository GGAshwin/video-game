  AOS.init();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var audioElement = new Audio('god of war.mp3');
audioElement.pause()
//audioElement.play()


let test = document.getElementById('play')

test.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
})
const pics=[{
    id:1
},
{
    id:2
},
{
    id:3
}]
var base=0;
function iterator(){
    console.log(pics[base])
    base++
    if(base>2)
    base=0
    pics[base]
    
    
}
//setInterval(iterator,4000)
