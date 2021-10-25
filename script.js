const palettes = document.querySelectorAll('.color');

// ....................Requesito 2 e 3.................... //
// Função que gera cores aleatórias
function colorGenerator() {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);

  const color1 = rgb1;
  const color2 = rgb2;
  const color3 = rgb3;

  const color = `rgb(${color1}, ${color2}, ${color3})`;

  return color;
}
// Função que adiciona as cores a paleta e deixa o primeiro elemento com a cor blackout //
function addColors() {
  for (let i = 0; i < palettes.length; i += 1) {
    palettes[0].style.backgroundColor = 'black';
    palettes[i].style.backgroundColor = colorGenerator();
  }
}


