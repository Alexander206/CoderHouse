
export function translate(personDao) {
  return {
    id: personDao.id || personDao._id,
    firstname: personDao.name,
    lastname: personDao.lastname,
    dni: personDao.dni,
  }
}