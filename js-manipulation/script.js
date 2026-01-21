const video = document.getElementById("video-src")
const progressbar = document.getElementById("progress-bar")
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressbar.value = percentage;
});
const button = document.getElementById("play-pause")
button.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        button.textContent = "Pause";
    } else {
        video.pause();
        button.textContent = "Play";
    }
});

const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.value = video.volume * 100;
volumeSlider.addEventListener('input', function() {
    video.volume = this.value / 100;
});

const speedSlider = document.getElementById('speedSlider');
speedSlider.value = video.playbackRate;
speedSlider.addEventListener('input', function() {
    video.playbackRate = this.value;
});

const reverseButton = document.getElementById('reverse');
reverseButton.addEventListener('click', function() {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

const forwardButton = document.getElementById('forward');
forwardButton.addEventListener('click', function() {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});