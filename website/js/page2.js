// page2.js

window.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");

  if (music) {
    music.volume = 0.15;
    music.muted = true; // Start muted for autoplay on iOS
  }
});

function toggleScroll() {
  const scroll = document.getElementById("scroll");
  const scrollBtn = document.querySelector(".scroll-btn");
  const music = document.getElementById("bg-music");

  if (scroll.style.display === "block") {
    scroll.style.display = "none";
    scrollBtn.style.display = "inline-block";
  } else {
    scroll.style.display = "block";
    scrollBtn.style.display = "none";

    if (music && music.muted) {
      music.muted = false;
      music.play().catch((e) => console.log("Playback blocked:", e));
    }
  }
}

function toggleMute() {
  const music = document.getElementById("bg-music");
  const btn = document.querySelector(".mute-btn");

  if (!music) return;

  music.muted = !music.muted;
  btn.textContent = music.muted ? "🔊 Unmute" : "🔇 Mute";
}
