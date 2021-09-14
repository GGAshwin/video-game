var audioElement = new Audio('rdr2.mp3');
audioElement.pause()
let test = document.getElementById('play')
test.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
})