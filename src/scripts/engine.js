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
const gameContainer = document.querySelector(".game");

const flipSound = new Audio("/src/sounds/flip.wav");
const matchSound = new Audio("/src/sounds/match.wav");
const errorSound = new Audio("/src/sounds/error.wav");
const bgMusic = new Audio("/src/sounds/background.mp3");
const witchLaughSound = new Audio("/src/sounds/quest_finish.wav");

bgMusic.loop = true;
bgMusic.volume = 0.2;

let musicPlaying = true;

window.addEventListener('load', function() {
  bgMusic.play().catch(function(error) {
    console.log('Autoplay bloqueado. O usuário precisa interagir com a página primeiro.');
  });
});

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    // Atualiza o ícone do botão para indicar que o som está desligado
    document.querySelector('.music-btn').textContent = '🔇';
  } else {
    bgMusic.play().catch(function(error) {
      console.log('Autoplay bloqueado. O usuário precisa interagir com a página primeiro.');
    });
    musicPlaying = true;
    // Atualiza o ícone do botão para indicar que o som está ligado
    document.querySelector('.music-btn').textContent = '🔊';
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

function handleClick() {
  if (
    openCards.length < 2 &&
    !this.classList.contains("boxOpen") &&
    !this.classList.contains("boxMatch")
  ) {
    // Reproduz o som de virar a carta
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
    // Reproduz o som de correspondência
    matchSound.currentTime = 0;
    matchSound.play();

    firstCard.classList.add("boxMatch");
    secondCard.classList.add("boxMatch");

    firstCard.onclick = null;
    secondCard.onclick = null;
  } else {
    // Reproduz o som de erro
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
    showToast();
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

function showToast() {
  // Reproduz o som da risada da bruxa
  witchLaughSound.currentTime = 0;
  witchLaughSound.play();

  const toast = document.getElementById("winToast");
  const progressBar = toast.querySelector(".progress");
  progressBar.style.animation = "none";
  void progressBar.offsetWidth;
  progressBar.style.animation = "progressBar 1.5s linear forwards";

  toast.style.display = "block";

  void toast.offsetWidth;

  toast.style.opacity = 1;

  setTimeout(() => {
    toast.style.opacity = 0;

    setTimeout(() => {
      toast.style.display = "none";
      startLoading();
    }, 500);
  }, 1500);
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
