const diff = document.querySelector("[name=diff]");
const eleGrid = document.querySelector(".grid");
const eleBtnPlay = document.querySelector(".btn-play");
const eleIntro = document.querySelector(".intro");
let arrBombs = [];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

eleBtnPlay.addEventListener("click", function () {
  arrBombs = [];
  /*La rimetto qui vuota per resettare l'array ongi volta che clickiamo "play", e devo usare let invece di const. Ma sarebbe un codice più pulito se la dichiarassi direttamente qui dentro */
  eleGrid.innerHTML = "";
  eleGrid.classList.remove("hidden");
  eleIntro.classList.add("hidden");

  const nCells = parseInt(diff.value);
  const dimSquare = Math.sqrt(nCells);
  eleGrid.style.setProperty("--dimSquare", dimSquare);

  for (let j = 1; j <= 16; j++) {
    let randomNumber;
    do {
      randomNumber = getRandomInteger(1, nCells);
    } while (arrBombs.includes(randomNumber));
    arrBombs.push(randomNumber);
  }

  for (let i = 1; i <= nCells; i++) {
    const eleSquare = document.createElement("div");
    eleSquare.innerHTML += i;
    eleSquare.classList.add("square");
    eleGrid.append(eleSquare);

    eleSquare.addEventListener("click", function () {
      this.classList.toggle("select");
      if (arrBombs.includes(i)) {
        eleSquare.classList.add("bomb");
        for (let i = 0; i < arrBombs.length; i++) {
          // arrBombs[i].classList.add('bomb');
          // const eleBombs = arrBombs[i];
          // eleBombs.classList.add("bomb");
          // console.log(eleBombs);
          // let eleBombs = document.createElement("div");
          // eleBombs = arrBombs[i];
          // eleBombs.classList.add("bomb");
          // eleGrid.append(eleBombs);
        }
      } else {
        eleSquare.classList.add("normal");
      }
    });
  }

  console.log(arrBombs);
});

// for (let i = 1; i <= 100; i++) {
//   const eleSquare = document.createElement("div");
//   eleSquare.innerHTML += [i];
//   eleSquare.classList.add("square");
//   eleGrid.append(eleSquare);

//   eleSquare.addEventListener("click", function () {
//     this.classList.toggle("select");
//   });
// }
