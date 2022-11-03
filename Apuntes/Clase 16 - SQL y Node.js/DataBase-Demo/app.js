import { createTable, deletePerson, deletePersons, getPersons, insertPerson, updatePersons } from "./db/index.js";

const persons = [
    {
        'fullname': 'Luis Ruiz',
        'age': 23,
        'email': 'lr@gmail.com',
        'phone': '00880088',
    },
    {
        'fullname': 'Maria Arrazola',
        'age': 20,
        'email': 'Ma@gmail.com',
        'phone': '11441144',
    },
    {
        'fullname': 'Javier Hernandez',
        'age': 30,
        'email': 'Jh@gmail.com',
        'phone': '33224433',
    },
]

try {
    await createTable()
    console.log('<<------------------------------>>');
    await deletePersons()
    console.log('<<------------------------------>>');
    await insertPerson(persons)
    console.log('<<------------------------------>>');
    let rows = await getPersons()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['fullname']}, ${row['age']}`);
    }
    console.log('<<------------------------------>>');
    await updatePersons({ age: 35 }, ['email', '=', 'Ma@gmail.com'])
    console.log('<<------------------------------>>');
    rows = await getPersons()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['fullname']}, ${row['age']}`);
    }
    console.log('<<------------------------------>>');
    await deletePerson({ email: 'Jh@gmail.com' })
    console.log('<<------------------------------>>');
    rows = await getPersons()
    for (const row of rows) {
        console.log(`${row['id']}, ${row['fullname']}, ${row['age']}`);
    }
    console.log('<<------------------------------>>');
} catch (error) {
    console.log(error.message);
}