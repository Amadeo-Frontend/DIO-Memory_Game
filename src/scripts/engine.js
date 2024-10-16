const emojis = [
  "👹",
  "👻",
  "☠️",
  "🧛",
  "🧟‍♂️",
  "⚰️",
  "🕷",
  "🧙‍♂️",
  "👹",
  "👻",
  "☠️",
  "🧛",
  "🧟‍♂️",
  "⚰️",
  "🕷",
  "🧙‍♂️",
];

let openCards = [];
let timer;
let startTime;
let elapsedTime = 0;

const gameContainer = document.querySelector(".game");
const timerElement = document.getElementById("gameTimer");
const toast = document.getElementById("winToast");

const flipSound = new Audio("/src/sounds/flip.wav");
const matchSound = new Audio("/src/sounds/match.wav");
const errorSound = new Audio("/src/sounds/error.wav");
const bgMusic = new Audio("/src/sounds/background.mp3");
const questFinishSound = new Audio("/src/sounds/quest_finish.wav");

bgMusic.loop = true;
bgMusic.volume = 0.2;

let musicPlaying = false;

window.addEventListener(
  "click",
  function () {
    if (!musicPlaying) {
      bgMusic.play().catch(function (error) {
        console.log(
          "Autoplay bloqueado. O usuário precisa interagir com a página primeiro."
        );
      });
      musicPlaying = true;
      document.querySelector(".music-btn").textContent = "🔊";
    }
  },
  { once: true }
);

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    document.querySelector(".music-btn").textContent = "🔇";
  } else {
    bgMusic.play().catch(function (error) {
      console.log(
        "Autoplay bloqueado. O usuário precisa interagir com a página primeiro."
      );
    });
    musicPlaying = true;
    document.querySelector(".music-btn").textContent = "🔊";
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledEmojis = shuffle(emojis.slice());

for (let i = 0; i < shuffledEmojis.length; i++) {
  const box = document.createElement("div");
  box.className = "item";
  box.dataset.emoji = shuffledEmojis[i];
  box.onclick = handleClick;
  gameContainer.appendChild(box);
}

function startTimer() {
  startTime = Date.now();
  timer = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerElement.textContent = `Tempo: ${elapsedTime}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function handleClick() {
  if (!timer) {
    startTimer();
  }

  if (
    openCards.length < 2 &&
    !this.classList.contains("boxOpen") &&
    !this.classList.contains("boxMatch")
  ) {
    flipSound.currentTime = 0;
    flipSound.play();

    this.classList.add("boxOpen");
    this.innerHTML = this.dataset.emoji;
    openCards.push(this);

    if (openCards.length === 2) {
      disableAllClicks();

      setTimeout(() => {
        checkMatch();
        enableClicks();
      }, 500);
    }
  }
}

function checkMatch() {
  const [firstCard, secondCard] = openCards;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    matchSound.currentTime = 0;
    matchSound.play();

    firstCard.classList.add("boxMatch");
    secondCard.classList.add("boxMatch");

    firstCard.onclick = null;
    secondCard.onclick = null;
  } else {
    errorSound.currentTime = 0;
    errorSound.play();

    firstCard.classList.add("shake");
    secondCard.classList.add("shake");

    setTimeout(() => {
      firstCard.classList.remove("shake", "boxOpen");
      firstCard.innerHTML = "";
      secondCard.classList.remove("shake", "boxOpen");
      secondCard.innerHTML = "";
    }, 500);
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    stopTimer();
    showToast(elapsedTime);
  }
}

function disableAllClicks() {
  document.querySelectorAll(".item").forEach((card) => {
    card.onclick = null;
  });
}

function enableClicks() {
  document.querySelectorAll(".item").forEach((card) => {
    if (!card.classList.contains("boxMatch")) {
      card.onclick = handleClick;
    }
  });
}

function startLoading() {
  document.querySelector(".Btn").style.display = "none";
  const toast = document.getElementById("winToast");
  toast.style.display = "none";
  toast.style.opacity = 0;
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    window.location.reload();
  }, 1500);
}

function showToast() {
  questFinishSound.currentTime = 0;
  questFinishSound.play();

  const toast = document.getElementById("winToast");

  toast.style.display = "block";
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;

    setTimeout(() => {
      toast.style.display = "none";
      document.getElementById("btn").style.display = "none";
      document.getElementById("spinner").style.display = "block";

      setTimeout(() => {
        startLoading();
      }, 1500);
    }, 500);
  }, 2000);
}
