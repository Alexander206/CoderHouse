const assert = require('assert');

class Calculadora {
    static suma(a, b) {
        return a + b;
    }
}

function evaluarSuma() {
    try {
        const value = Calculadora.suma(8, 2);
        const expectativa = 9;
        assert.equal(value, expectativa);
        console.log('El test fue OK');
    } catch (error) {
        console.log('El test fallo satisfactoriamente.', error.message);
    }
}

evaluarSuma();
