import { borrarProducto, borrarProductos, createTable, insertarProductos, modificarProductos, verProductos } from "./db/index.js";

const productos = [
    {
        "nombre": "Zapato formal",
        "codigo": "1357",
        "precio": 120000,
        "stock": 8
    },
    {
        "nombre": "Zapato casual",
        "codigo": "9004",
        "precio": 110000,
        "stock": 6
    },
    {
        "nombre": "Zapato deportivo",
        "codigo": "8107",
        "precio": 120000,
        "stock": 12
    },
    {
        "nombre": "Zapato tela",
        "codigo": "9057",
        "precio": 160000,
        "stock": 6
    },
    {
        "nombre": "Zapato caucho",
        "codigo": "2184",
        "precio": 140000,
        "stock": 10
    },
]

try {
    await createTable()
    console.log('<<------------------------------>>');
    await insertarProductos(productos)
    console.log('<<------------------------------>>');
    let rows = await verProductos()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['nombre']}, ${row['codigo']}, ${row['precio']}, ${row['stock']}`);
    }
    console.log('<<------------------------------>>');
    await modificarProductos({ stock: 0 }, ['id', '=', '2'])
    console.log('<<------------------------------>>');
    rows = await verProductos()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['nombre']}, ${row['codigo']}, ${row['precio']}, ${row['stock']}`);
    }
    console.log('<<------------------------------>>');
    await borrarProducto({ id: 3 })
    console.log('<<------------------------------>>');
    rows = await verProductos()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['nombre']}, ${row['codigo']}, ${row['precio']}, ${row['stock']}`);
    }
    console.log('<<------------------------------>>');
} catch (error) {
    console.log(error.message);
}