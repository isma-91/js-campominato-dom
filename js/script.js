const diff = document.querySelector("[name=diff]");
const eleGrid = document.querySelector(".grid");
const eleBtnPlay = document.querySelector(".btn-play");
const eleIntro = document.querySelector(".intro");
const arrBombs = [];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

eleBtnPlay.addEventListener("click", function () {
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

  console.log(arrBombs);

  for (let i = 1; i <= nCells; i++) {
    const eleSquare = document.createElement("div");
    eleSquare.innerHTML += [i];
    eleSquare.classList.add("square");
    eleGrid.append(eleSquare);

    eleSquare.addEventListener("click", function () {
      this.classList.toggle("select");
    });
  }
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
