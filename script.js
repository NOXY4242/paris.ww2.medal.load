// ASTUCES
const tips = [
    "Bienvenue sur Medal",
    "Nous sommes en 1944 lors de la libération de Paris",
    "Faites confiance aux bonnes personnes",
    "Les choix seront parfois difficiles alors réfléchissez",
    "Choisissez votre camp"
];

let tipIndex = 0;
const tipText = document.getElementById("tip-text");

function changeTip() {
    tipText.style.opacity = 0;
    setTimeout(() => {
        tipText.textContent = tips[tipIndex];
        tipText.style.opacity = 1;
        tipIndex = (tipIndex + 1) % tips.length;
    }, 500);
}

setInterval(changeTip, 6000);
changeTip();

// MUSIQUE
const tracks = [
    { name: "Inglorious Bastard", file: "music/inglorious_basterd.mp3" },
    { name: "Dark Night", file: "music/dark_night.mp3" },
    { name: "Hier Encore", file: "music/hier_encore.mp3" },
    { name: "Call Of Duty WW2", file: "music/call_of_duty_ww2.mp3" }
];

const audio = document.getElementById("audio");
const musicName = document.getElementById("music-name");

let trackIndex = Math.floor(Math.random() * tracks.length);

function playTrack() {
    audio.src = tracks[trackIndex].file;
    musicName.textContent = tracks[trackIndex].name;
    audio.play();
    audio.volume = 0.25; // 25% (idéal pour un loading screen)
}

audio.addEventListener("ended", () => {
    trackIndex = (trackIndex + 1) % tracks.length;
    playTrack();
});

playTrack();

// SLIDESHOW
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 8000); // 8 secondes par image
