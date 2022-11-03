const Contenedor = require("./index.js");
const productos = new Contenedor("productos.txt");
const productos1 = {
  title: "Gixer250",
  price: 14500000,
  thumbnail:
    "https://suzuki.com.co/sites/default/files/2021-04/gixxer-250-negra.png",
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

const prueba = async () => {
  await productos.save(productos3);
  await productos.getAll();
  await productos.getById(1);
  await productos.deleteById(1);
  await productos.deleteAll();
};
prueba();
