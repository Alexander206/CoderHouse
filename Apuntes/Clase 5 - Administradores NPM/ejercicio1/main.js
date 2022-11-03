let array = [];
let numRepetidos = {};

for (i = 0; i < 10000; i++) {
  const num = numeroAleatorio(1, 21);
  if (!numRepetidos[num]) {
    numRepetidos[num] = 0;
  }
  numRepetidos[num] = numRepetidos[num] + 1;
}

for (let i = 0; i < array.length; i++) {}

function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(numRepetidos);
