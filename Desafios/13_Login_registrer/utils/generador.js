const { faker } = require('@faker-js/faker/locale/es_MX');

function generarProductoFake() {
    return {
        nombre: faker.commerce.product(),
        precio: faker.commerce.price(),
        thumbnail: faker.image.food(300, 300, true),
    };
}

module.exports = generarProductoFake;
