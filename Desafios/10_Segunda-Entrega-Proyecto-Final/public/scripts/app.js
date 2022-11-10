// Variables para las ventanas

let btnBuscarCerrar = document.querySelector('.btn-abrir__get-product-id');
let btnBuscarAbrir = document.querySelector('.tool_btn__search');
let btnPostAbrir = document.querySelector('.tool_btn__add');
let btnPostCerrar = document.querySelector('.btn-abrir__post-product');
let btnPutCerrar = document.querySelector('.btn-abrir__put-product');

let cartGetId = document.querySelector('.OFF-tarjetaComponent__get-product-Id');
let cartPost = document.querySelector('.OFF-tarjetaComponent__post-product');
let cartPut = document.querySelector('.OFF-tarjetaComponent__put-product-Id');

// Variables para ventana Put

let formPutID = document.querySelector('.PutID');
let formPutNombre = document.querySelector('.PutNombre');
let formPutDescripcion = document.querySelector('.PutDescripcion');
let formPutCodigo = document.querySelector('.PutCodigo');
let formPutFoto = document.querySelector('.PutFoto');
let formPutPrecio = document.querySelector('.PutPrecio');
let formPutStock = document.querySelector('.PutStock');

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
const urlCarrito = '/api/carrito';
let respuesta;
let resultados = document.querySelector('.productos');

// Funciones para abrir y cerrar ventanas

btnBuscarAbrir.addEventListener('click', () => {
    cartGetId.className = 'ON-tarjetaComponent__get-product-Id';
    cartPost.className = 'OFF-tarjetaComponent__get-product-Id';
});

btnBuscarCerrar.addEventListener('click', () => {
    cartGetId.className = 'OFF-tarjetaComponent__get-product-Id';
});

btnPostAbrir.addEventListener('click', () => {
    cartPost.className = 'ON-tarjetaComponent__get-product-Id';
    cartGetId.className = 'OFF-tarjetaComponent__get-product-Id';
});

btnPostCerrar.addEventListener('click', () => {
    cartPost.className = 'OFF-tarjetaComponent__get-product-Id';
});

btnPutCerrar.addEventListener('click', () => {
    cartPut.className = 'OFF-tarjetaComponent__put-product-Id';
});

async function eliminarProducto(id) {
    await fetch(url)
        .then((res) => res.json())
        .then((response) => (respuesta = response));
    productoDELETE(respuesta[id].id);
    productosGET();
}

async function mostrarEditar(id) {
    console.log(id);
    await fetch(url)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    formPutID.placeholder = `${respuesta[id].id}`;
    formPutID.value = respuesta[id].id;

    formPutNombre.placeholder = `${respuesta[id].nombre}`;
    formPutNombre.value = respuesta[id].nombre;

    formPutDescripcion.placeholder = `${respuesta[id].descripcion}`;
    formPutDescripcion.value = respuesta[id].descripcion;

    formPutCodigo.placeholder = `${respuesta[id].codigo}`;
    formPutCodigo.value = respuesta[id].codigo;

    formPutFoto.placeholder = `${respuesta[id].foto}`;
    formPutFoto.value = respuesta[id].foto;

    formPutPrecio.placeholder = `${respuesta[id].precio}`;
    formPutPrecio.value = respuesta[id].precio;

    formPutStock.placeholder = `${respuesta[id].stock}`;
    formPutStock.value = respuesta[id].stock;

    cartPut.className = 'ON-tarjetaComponent__put-product-Id';
}

// Logica para el formulario

productosGET();

// Eventos de los botones del CRUD

btnFormGetProduct.addEventListener('click', (event) => {
    event.preventDefault();

    cartGetId.className = 'OFF-tarjetaComponent__get-product-Id';
    cartPost.className = 'OFF-tarjetaComponent__get-product-Id';

    productoGET(id_getProduct.id.value);
});

btnFormPostProduct.addEventListener('click', (event) => {
    event.preventDefault();

    cartGetId.className = 'OFF-tarjetaComponent__get-product-Id';
    cartPost.className = 'OFF-tarjetaComponent__get-product-Id';

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
            <button class="btn__producto__carrito" onclick="productoCarritoPOST('${respuesta[i].id}')">
            <ion-icon name="cart-outline"></ion-icon>
            </button>
            <button class="btn__producto__editar" onclick="mostrarEditar(${i})">
            <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button class="btn__producto__eliminar" onclick="eliminarProducto(${i})">
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

    resultados.innerHTML = compo nente;
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
    <button class="btn__producto__editar" onclick="mostrarEditar(${respuesta})" >
    <ion-icon name="pencil-outline"></ion-icon>
    </button>
    <button class="btn__producto__eliminar" onclick="eliminarProducto(${id})">
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

async function productoCarritoPOST(idProducto) {
    const optionsPOST = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    await fetch(urlCarrito)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    await fetch(`${urlCarrito}/${respuesta[0].id}/productos/${idProducto}`, optionsPOST)
        .then((res) => res.json())
        .then((response) => console.log(response));
}
