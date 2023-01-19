(function () {
  
  const words = [
    'Lectura',
   'Breve',
   'Espalda',
   'Educación',
   'Reunión',
   'Sexuales',
   'Castigo',
   'Cumplir',
   'Sprite',
   'Voladura',
  ];

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  const word = words[random(0, words.length - 1)];
  axios
    .post('http://localhost:3000/words', { word })
    .then(response => console.log(response.data))
    .catch(console.error)
})();