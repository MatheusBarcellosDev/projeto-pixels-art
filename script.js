const palettes = document.querySelectorAll('.color');

// ....................Requesito 2 e 3.................... //
// Função que gera cores aleatórias
function colorGenerator() {
  const generatorRgb1 = Math.floor(Math.random() * 255);
  const generatorRgb2 = Math.floor(Math.random() * 255);
  const generatorRgb3 = Math.floor(Math.random() * 255);

  const color1 = generatorRgb1;
  const color2 = generatorRgb2;
  const color3 = generatorRgb3;

  const color = `rgb(${color1}, ${color2}, ${color3})`

  return color;
}
// Função que adiciona as cores a paleta e deixa o primeiro elemento com a cor blackout //
function createColors() {
  for (let index = 0; index < palettes.length; index += 1) {
    palettes[0].style.backgroundColor = "black";
    palettes[index].style.backgroundColor = colorGenerator();
  }
}

// ....................Requesito 4 e 5.................... //
const pixelBoards = document.querySelector('#pixel-board');
let pixelImput;
const defaultPixel = 5;

// Função que ajusta o tamanho do board conforme o input o usuário //
function sizePixelBord() {
  const sizePixel = 40 * pixelImput;
  pixelBoards.style.width = `${sizePixel}px`
  pixelBoards.style.height = `${sizePixel}px`
}

// Função que cria os pixel na tela e faz a busca no localStorage //
function createPixels() {
  if (localStorage.getItem('number') === null) {
    pixelImput = defaultPixel;
  } else {
    pixelImput = localStorage.getItem('number');
  }

  sizePixelBord();
  const n = pixelImput ** 2;

  for (let i = 0; i < n; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = "pixel"
    pixel.style.backgroundColor = "white"
    pixelBoards.appendChild(pixel);
  }
}

// Função que reseta o board //
function reset() {
  const board = document.querySelector('#pixel-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

// Função que salva o board e limita o tamanho //
function createBoard() {
  const btnCreate = document.querySelector('#generate-board');
  const input = document.querySelector('#board-size');

  btnCreate.addEventListener('click', function () {
    pixelImput = input.value;
    console.log(pixelImput);
    if (pixelImput == '') {
      alert("Board inválido!")
    } else if (pixelImput < 5) {
      localStorage.number = 5;
    } else if (pixelImput > 50) {
      localStorage.number = 50;
    } else {
      localStorage.number = pixelImput;
    }
    
    colorPrimary();
    reset();
    createPixels();
    getColor();

  });
}
createPixels();
createBoard();

// ....................Requesito 6, 7 e 8.................... //
// Função que adiciona a class selected //
function addSelected() {
  const selected = document.querySelectorAll('.color');

  for (let index = 0; index < selected.length; index++) {

    selected[index].addEventListener('click', (e) => {
      selected.forEach((pixel) => {
        pixel.classList.remove('selected');
      });
      e.target.classList.add('selected');
    });
  }
}

// Função que captura a cor selecionada //
function getColor() {
  const color = document.querySelectorAll('.color');
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', () => {
      const colorSelect = color[index].style.backgroundColor;

      for (let i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('click', () => {
          pixel[i].style.backgroundColor = colorSelect;
        });
      }
    });
  }
}

// Função que captura a cor selecionada no input color //
function getColorInput() {
  const input = document.querySelector('#input-color');
  input.addEventListener('input', () => {
    const color = input.value;
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', () => {
        pixel[i].style.backgroundColor = color;
      });
    }
  });
}
// Função que seleciona a cor primaria //
function colorPrimary() {
  const palletes = document.querySelector(".color")
  const pixel = document.querySelectorAll(".pixel")
  palletes.classList.add('selected');

  const colorBlack = palletes.style.backgroundColor;

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = colorBlack;
    });
  }
}

// ....................Requesito 9.................... //

// Função que limpa o board //
function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
}

function btnClearBoard() {
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', () => {
    clearBoard();
  });
}

colorPrimary();
createColors();
addSelected();
getColor();
getColorInput();
btnClearBoard();
colorPrimary();
