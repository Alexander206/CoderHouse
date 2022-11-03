const Contenedor = require("../gestionArchivo.js");
const productos = new Contenedor("productos.txt");
const productos1 = {
  title: "Gixer250",
  price: 14500000,
  thumbnail: "https://suzuki.com.co/sites/default/files/2021-04/gixxer-250-negra.png",
};
const productos2 = {
  title: "Mt03",
  price: 21800000,
  thumbnail:
    "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2021/11/yamaha-mt-03-2022-8.jpg",
};
const productos3 = {
  title: "z400",
  price: 32400000,
  thumbnail:
    "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2022/06/Kawasaki-Z400-2023-4.jpg",
};

async function initProducts(req, res) {
  await productos.deleteAll();
  await productos.save(productos1);
  await productos.save(productos2);
  await productos.save(productos3);
  res.send(
    `<a href="/productos"> Productos </a> <br>
      <a href="/productoRandom"> Producto Random </a>`
  );
}

async function getAllProducts(req, res) {
  res.send(await productos.getAll());
}

async function getRandomProduct(req, res) {
  const num = getRandomInt(1, (await productos.cantidadProductos()) + 1);
  res.send(await productos.getById(num));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = { initProducts, getAllProducts, getRandomProduct };
