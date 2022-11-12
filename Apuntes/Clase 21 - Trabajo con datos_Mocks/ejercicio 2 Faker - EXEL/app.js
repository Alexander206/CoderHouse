import { faker } from '@faker-js/faker/locale/es_MX';
import { writeFile } from 'fs/promises';

const { name, internet, color } = faker;

let data = 'Nombre;Apellido;Correo;Color;Trabajo\n';

for (let index = 0; index < 100; index++) {
    data += `${name.firstName()};${name.lastName()};${internet.email()};${color.human()};${name.jobTitle()}\n`;
}

try {
    await writeFile('./test.csv', data);
} catch (error) {
    console.log('El test fallo satisfactoriamente.', error.message);
}
