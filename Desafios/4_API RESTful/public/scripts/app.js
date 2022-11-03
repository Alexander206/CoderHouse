let btnActivarAside = document.querySelector("#abrirAside");
let btnDesactivarAside = document.querySelector("#cerrarAside");
let asideLeft = document.querySelector(".aside-left-cerrado");

// Botones del selector tipo radio

let btnGetProducts = document.querySelector(".getProducts-radio");
let btnGetProductId = document.querySelector(".getProductId-radio");
let btnPostProduct = document.querySelector(".postProduct-radio");
let btnPutProductId = document.querySelector(".putProductId-radio");
let btnDeleteProductId = document.querySelector(".deleteProductId-radio");

// Tarjetas de CRUD

let tarjetaGetProducts = document.querySelector(".ON-tarjetaComponent__get-products");
let tarjetaGetProductId = document.querySelector(".OFF-tarjetaComponent__get-product-Id");
let tarjetaPostProduct = document.querySelector(".OFF-tarjetaComponent__post-product");
let tarjetaPutProductId = document.querySelector(".OFF-tarjetaComponent__put-product-Id");
let tarjetaDeleteProductId = document.querySelector(".OFF-tarjetaComponent__delete-product-Id");

// Logica para mostrar y ocultar tarjetas

btnGetProducts.addEventListener("click", () => {
  tarjetaGetProducts.className = "ON-tarjetaComponent__get-products";
  tarjetaGetProductId.className = "OFF-tarjetaComponent__get-product-Id";
  tarjetaPostProduct.className = "OFF-tarjetaComponent__post-product";
  tarjetaPutProductId.className = "OFF-tarjetaComponent__put-product-Id";
  tarjetaDeleteProductId.className = "OFF-tarjetaComponent__delete-product-Id";
});

btnGetProductId.addEventListener("click", () => {
  tarjetaGetProducts.className = "OFF-tarjetaComponent__get-products";
  tarjetaGetProductId.className = "ON-tarjetaComponent__get-product-Id";
  tarjetaPostProduct.className = "OFF-tarjetaComponent__post-product";
  tarjetaPutProductId.className = "OFF-tarjetaComponent__put-product-Id";
  tarjetaDeleteProductId.className = "OFF-tarjetaComponent__delete-product-Id";
});

btnPostProduct.addEventListener("click", () => {
  tarjetaGetProducts.className = "OFF-tarjetaComponent__get-products";
  tarjetaGetProductId.className = "OFF-tarjetaComponent__get-product-Id";
  tarjetaPostProduct.className = "ON-tarjetaComponent__post-product";
  tarjetaPutProductId.className = "OFF-tarjetaComponent__put-product-Id";
  tarjetaDeleteProductId.className = "OFF-tarjetaComponent__delete-product-Id";
});

btnPutProductId.addEventListener("click", () => {
  tarjetaGetProducts.className = "OFF-tarjetaComponent__get-products";
  tarjetaGetProductId.className = "OFF-tarjetaComponent__get-product-Id";
  tarjetaPostProduct.className = "OFF-tarjetaComponent__post-product";
  tarjetaPutProductId.className = "ON-tarjetaComponent__put-product-Id";
  tarjetaDeleteProductId.className = "OFF-tarjetaComponent__delete-product-Id";
});

btnDeleteProductId.addEventListener("click", () => {
  tarjetaGetProducts.className = "OFF-tarjetaComponent__get-products";
  tarjetaGetProductId.className = "OFF-tarjetaComponent__get-product-Id";
  tarjetaPostProduct.className = "OFF-tarjetaComponent__post-product";
  tarjetaPutProductId.className = "OFF-tarjetaComponent__put-product-Id";
  tarjetaDeleteProductId.className = "ON-tarjetaComponent__delete-product-Id";
});

// Logica para aside left

btnActivarAside.addEventListener("click", abrirAside);
btnDesactivarAside.addEventListener("click", cerrarAside);

function abrirAside() {
  asideLeft.className = "aside-left-abierto";
}

function cerrarAside() {
  asideLeft.className = "aside-left-cerrado";
}

// Logica para aside login/registrer

let btnActivarLogin = document.querySelector(".abrirLogin");
let btnDesactivarLogin = document.querySelector(".cerrarLogin");
let login = document.querySelector(".login-registrer-oculto");

btnActivarLogin.addEventListener("click", abrirLogin);
btnDesactivarLogin.addEventListener("click", cerrarLogin);

function abrirLogin() {
  login.className = "login-registrer-visible";
}

function cerrarLogin() {
  login.className = "login-registrer-oculto";
}

// Logica para el formulario

/* variables del  formulario */

const btnAll = document.querySelector("#btn-getProductos");

const url = "/api/productos";
let respuesta;
let resultados = document.querySelector(".resultados");

async function productosGET() {
  await fetch(url)
    .then((res) => res.json())
    .then((response) => (respuesta = response));

  let nombre = ["<tr>"];
  let precio = ["<tr>"];
  let thumbnail = ["<tr>"];

  nombre.push(`<td> Nombre: </td>`);
  precio.push(`<td> Precio: </td>`);
  thumbnail.push(`<td> Imagen: </td>`);

  for (let i = 0; i < respuesta.length; i++) {
    nombre.push(`<td>| ${respuesta[i].nombre} </td>`);
    precio.push(`<td>| ${respuesta[i].precio} </td>`);
    thumbnail.push(`<td>| ${respuesta[i].thumbnail} </td>`);
  }

  nombre.push("</tr>");
  precio.push("</tr>");
  thumbnail.push("</tr>");

  resultados.innerHTML = `<br><table>${nombre}${precio}${thumbnail}</table><br>`;

  console.log(respuesta);
}

/* 
const id = 2;
const objeto = {
  nombre: "Nuevo zapato",
  precio: 850000,
  thumbnail: "20",
};

const optionsPOST = {
  method: "POST",
  body: JSON.stringify(objeto),
  headers: {
    "Content-Type": "application/json",
  },
};

const optionsPUT = {
  method: "PUT",
  body: JSON.stringify(objeto),
  headers: {
    "Content-Type": "application/json",
  },
};

const optionsDELETE = {
  method: "DELETE",
  body: JSON.stringify(),
  headers: {
    "Content-Type": "application/json",
  },
};

fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((response) => console.log(response));

fetch(url, optionsPOST)
  .then((res) => res.json())
  .then((response) => console.log(response));

fetch(`${url}/${id}`, optionsPUT)
  .then((res) => res.json())
  .then((response) => console.log(response));

fetch(`${url}/${id}`, optionsDELETE)
  .then((res) => res.json())
  .then((response) => console.log(response));

fetch(url)
  .then((res) => res.json())
  .then((response) => console.log(response));
 */
