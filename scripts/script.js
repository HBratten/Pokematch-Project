const cardsArray = [
  {
    name: "arcanine",
    img: "../assets/images/arcanine.png"
  },
  {
    name: "bulbasaur",
    img: "../assets/images/bulbasaur.png"
  },
  {
    name: "charmander",
    img: "../assets/images/charmander.png"
  },
  {
    name: "dragonite",
    img: "../assets/images/dragonite.png"
  },
  {
    name: "eevee",
    img: "../assets/images/eevee.png"
  },
  {
    name: "haunter",
    img: "../assets/images/haunter.png"
  },
  {
    name: "mewtwo",
    img: "../assets/images/mewtwo.png"
  },
  {
    name: "pikachu",
    img: "../assets/images/pikachu.png"
  },
  {
    name: "poliwhirl",
    img: "../assets/images/poliwhirl.png"
  },
  {
    name: "ponyta",
    img: "../assets/images/ponyta.png"
  },
  {
    name: "snorlax",
    img: "../assets/images/snorlax.png"
  },
  {
    name: "squirtle",
    img: "../assets/images/squirtle.png"
  }
];

const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
let firstCard = "";
let secondCard = "";
let count = 0;
let previousTarget = null;
let delay = 1000;

const game = document.querySelector("#game");
const grid = document.createElement("section");

grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name } = item;
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;
  const front = document.createElement("div");
  front.classList.add("front");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

function match() {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.add("match");
  });
}

function resetCards() {
  firstCard = "";
  secondCard = "";
  count = 0;
  previousTarget = null;
  const selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.remove("selected");
  });
}

grid.addEventListener("click", event => {
  const clicked = event.target;
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstCard = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondCard = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        setTimeout(match, delay);
      }
      setTimeout(resetCards, delay);
    }
    previousTarget = clicked;
  }
});

function refreshPage() {
  window.location.reload();
}
