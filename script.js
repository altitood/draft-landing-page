let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let leonardo = document.getElementById('leonardo');
let bruna = document.getElementById('bruna');
let samantha = document.getElementById('samantha');

function scrollDireita() {
  samantha.style = 'display:none';
  leonardo.style = 'display:flex';
  arrowRight.style = 'display:none';
  arrowLeft.style = 'display:flex';
}

function scrollEsquerda() {
  leonardo.style = 'display:none';
  samantha.style = 'display:flex';
  arrowRight.style = 'display:flex';
  arrowLeft.style = 'display:none';
}
