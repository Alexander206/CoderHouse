(function () {

  axios
    .get('http://localhost:3000/words')
    .then(response => console.log(response.data))
    .catch(console.error)
})();