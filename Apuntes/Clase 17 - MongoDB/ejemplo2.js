// show databases;

// use mibase;

db.usuarios.insertMany([
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 23,
        email: 'jp@gmail.com',
    },
    {
        nombre: 'Pedro',
        apellido: 'Mei',
        edad: 21,
        email: 'pm@gmail.com',
    },
    {
        nombre: 'Juan',
        apellido: 'Suarez',
        edad: 25,
        email: 'js@gmail.com',
    },
]);

// show collections;

db.usuarios.find({});