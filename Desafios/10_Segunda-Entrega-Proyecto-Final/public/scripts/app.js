let btnActivarAside = document.querySelector('#abrirAside');
let btnDesactivarAside = document.querySelector('#cerrarAside');
let asideLeft = document.querySelector('.aside-left-cerrado');

// Botones del selector

let btnGetProducts = document.querySelector('.getProducts');
let btnGetProductId = document.querySelector('.getProductId');
let btnPostProduct = document.querySelector('.postProduct');
let btnPutProductId = document.querySelector('.putProductId');
let btnDeleteProductId = document.querySelector('.deleteProductId');

// Tarjetas de CRUD

let tarjetaGetProducts = document.querySelector('.ON-tarjetaComponent__get-products');
let tarjetaGetProductId = document.querySelector('.OFF-tarjetaComponent__get-product-Id');
let tarjetaPostProduct = document.querySelector('.OFF-tarjetaComponent__post-product');
let tarjetaPutProductId = document.querySelector('.OFF-tarjetaComponent__put-product-Id');
let tarjetaDeleteProductId = document.querySelector('.OFF-tarjetaComponent__delete-product-Id');

/* variables del  formulario */

const btnFormGetProduct = document.getElementById('tarjeta__btn-getProduct');
const id_getProduct = document.getElementById('form-Get');

const btnFormPostProduct = document.getElementById('tarjeta__btn-postProduct');
const body_productPost = document.getElementById('form-Post');

const btnFormPutProduct = document.getElementById('tarjeta__btn-putProduct');
const body_productPut = document.getElementById('form-Put');

const btnFormDeleteProduct = document.getElementById('tarjeta__btn-deleteProduct');
const id_productDelete = document.getElementById('form-Delete');

const url = '/api/productos';
let respuesta;
let resultados = document.querySelector('.productos');

// Logica para mostrar y ocultar tarjetas

btnGetProducts.addEventListener('click', () => {
    tarjetaGetProducts.className = 'ON-tarjetaComponent__get-products';
    tarjetaGetProductId.className = 'OFF-tarjetaComponent__get-product-Id';
    tarjetaPostProduct.className = 'OFF-tarjetaComponent__post-product';
    tarjetaPutProductId.className = 'OFF-tarjetaComponent__put-product-Id';
    tarjetaDeleteProductId.className = 'OFF-tarjetaComponent__delete-product-Id';
});

btnGetProductId.addEventListener('click', () => {
    tarjetaGetProducts.className = 'OFF-tarjetaComponent__get-products';
    tarjetaGetProductId.className = 'ON-tarjetaComponent__get-product-Id';
    tarjetaPostProduct.className = 'OFF-tarjetaComponent__post-product';
    tarjetaPutProductId.className = 'OFF-tarjetaComponent__put-product-Id';
    tarjetaDeleteProductId.className = 'OFF-tarjetaComponent__delete-product-Id';
});

btnPostProduct.addEventListener('click', () => {
    tarjetaGetProducts.className = 'OFF-tarjetaComponent__get-products';
    tarjetaGetProductId.className = 'OFF-tarjetaComponent__get-product-Id';
    tarjetaPostProduct.className = 'ON-tarjetaComponent__post-product';
    tarjetaPutProductId.className = 'OFF-tarjetaComponent__put-product-Id';
    tarjetaDeleteProductId.className = 'OFF-tarjetaComponent__delete-product-Id';
});

btnPutProductId.addEventListener('click', () => {
    tarjetaGetProducts.className = 'OFF-tarjetaComponent__get-products';
    tarjetaGetProductId.className = 'OFF-tarjetaComponent__get-product-Id';
    tarjetaPostProduct.className = 'OFF-tarjetaComponent__post-product';
    tarjetaPutProductId.className = 'ON-tarjetaComponent__put-product-Id';
    tarjetaDeleteProductId.className = 'OFF-tarjetaComponent__delete-product-Id';
});

btnDeleteProductId.addEventListener('click', () => {
    tarjetaGetProducts.className = 'OFF-tarjetaComponent__get-products';
    tarjetaGetProductId.className = 'OFF-tarjetaComponent__get-product-Id';
    tarjetaPostProduct.className = 'OFF-tarjetaComponent__post-product';
    tarjetaPutProductId.className = 'OFF-tarjetaComponent__put-product-Id';
    tarjetaDeleteProductId.className = 'ON-tarjetaComponent__delete-product-Id';
});

// Logica para aside left

btnActivarAside.addEventListener('click', abrirAside);
btnDesactivarAside.addEventListener('click', cerrarAside);

function abrirAside() {
    asideLeft.className = 'aside-left-abierto';
}

function cerrarAside() {
    asideLeft.className = 'aside-left-cerrado';
}

// Logica para aside login/registrer

let btnActivarLogin = document.querySelector('.abrirLogin');
let btnDesactivarLogin = document.querySelector('.cerrarLogin');
let login = document.querySelector('.login-registrer-oculto');

btnActivarLogin.addEventListener('click', abrirLogin);
btnDesactivarLogin.addEventListener('click', cerrarLogin);

function abrirLogin() {
    login.className = 'login-registrer-visible';
}

function cerrarLogin() {
    login.className = 'login-registrer-oculto';
}

// Logica para el formulario

productosGET();

// Eventos de los botones

btnFormGetProduct.addEventListener('click', (event) => {
    event.preventDefault();
    productoGET(id_getProduct.id.value);
});

btnFormPostProduct.addEventListener('click', (event) => {
    event.preventDefault();

    productoPOST(
        body_productPost.nombre.value,
        body_productPost.descripcion.value,
        body_productPost.codigo.value,
        body_productPost.foto.value,
        body_productPost.precio.value,
        body_productPost.stock.value,
    );
    productosGET();
});

btnFormPutProduct.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(body_productPut.id.value);

    productoPUT(
        body_productPut.id.value,
        body_productPut.nombre.value,
        body_productPut.descripcion.value,
        body_productPut.codigo.value,
        body_productPut.foto.value,
        body_productPut.precio.value,
        body_productPut.stock.value,
    );
    productosGET();
});

btnFormDeleteProduct.addEventListener('click', (event) => {
    event.preventDefault();
    productoDELETE(id_productDelete.id.value);
    productosGET();
});

// funciones CRUD

async function productosGET() {
    await fetch(url)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    let componente = '';

    for (let i = 0; i < respuesta.length; i++) {
        componente = componente + "<div class='producto'>";
        componente =
            componente +
            `<figure class="producto__imagen">
            <img src="${respuesta[i].foto}" alt="">
            </figure>
            <div class="producto__cont__categoria-carrito">
            <button class="btn__producto__carrito" value="${}">
            <ion-icon name="cart-outline"></ion-icon>
            </button>
            <button class="btn__producto__editar" >
            <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button class="btn__producto__eliminar">
            <ion-icon name="trash-outline"></ion-icon>
            </button>
            </div>
            <h1 class="producto__title">
            ${respuesta[i].nombre}
            </h1>
            <p class="producto__descripcion">
            <strong>Descripción: </strong>${respuesta[i].descripcion}
            </p>
            <p class="producto__id">
            <strong>ID: </strong> ${respuesta[i].id}
            </p>
            <p class="producto__referencia">
            <strong>Referencia: </strong> ${respuesta[i].codigo}
            </p>
            <p class="producto_existencias">
            <strong>Existencia: </strong> ${respuesta[i].stock}
            </p>
            <p class="producto_precio">
            <strong class="precio">$ ${respuesta[i].precio} </strong>
            </p>
            <button class="btn__producto">
            Comprar
            </button>`;
        componente = componente + '</div>';
    }

    resultados.innerHTML = componente;
}

async function productoGET(id) {
    await fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    let componente = `
    <div class='producto'>
    <figure class="producto__imagen">
    <img src="${respuesta.foto}" alt="">
    </figure>
    <div class="producto__cont__categoria-carrito">
    <button class="btn__producto__carrito" value="${respuesta.id}">
    <ion-icon name="cart-outline"></ion-icon>
    </button>
    <button class="btn__producto__editar" value="${respuesta.id}">
    <ion-icon name="pencil-outline"></ion-icon>
    </button>
    <button class="btn__producto__eliminar" value="${respuesta.id}">
    <ion-icon name="trash-outline"></ion-icon>
    </button>
    </div>
    <h1 class="producto__title">
    ${respuesta.nombre}
    </h1>
    <p class="producto__descripcion">
    <strong>Descripción: </strong>${respuesta.descripcion}
    </p>
    <p class="producto__id">
    <strong>ID: </strong> ${respuesta.id}
    </p>
    <p class="producto__referencia">
    <strong>Referencia: </strong> ${respuesta.codigo}
    </p>
    <p class="producto_existencias">
    <strong>Existencia: </strong> ${respuesta.stock}
    </p>
    <p class="producto_precio">
    <strong class="precio">$ ${respuesta.precio} </strong>
    </p>
    <button class="btn__producto">
    Comprar
    </button>
    </div>`;

    resultados.innerHTML = componente;
}

async function productoPOST(nombre, descripcion, codigo, foto, precio, stock) {
    const objeto = {
        nombre,
        descripcion,
        codigo,
        foto,
        precio,
        stock,
    };

    const optionsPOST = {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    await fetch(url, optionsPOST)
        .then((res) => res.json())
        .then((response) => console.log(response));
}

async function productoPUT(id, nombre, descripcion, codigo, foto, precio, stock) {
    const objeto = {
        nombre,
        descripcion,
        codigo,
        foto,
        precio,
        stock,
    };

    const optionsPUT = {
        method: 'PUT',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(`${url}/${id}`, optionsPUT)
        .then((res) => res.json())
        .then((response) => console.log(response));
}

async function productoDELETE(id) {
    const optionsDELETE = {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    await fetch(`${url}/${id}`, optionsDELETE)
        .then((res) => res.json())
        .then((response) => console.log(response));
}
