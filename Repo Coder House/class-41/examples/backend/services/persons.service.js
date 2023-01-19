import pick from 'lodash/pick.js'
import PersonsRepository from '../models/repositories/Person.repository.js'
import Person from '../models/Person.model.js'
import PersonsDto from '../models/dto/Persons.dto.js'

const repository = new PersonsRepository()

export async function create(data) {
  const dataClean = pick(data, ['firstname','lastname','dni'])
  const person = await repository.create(new Person(dataClean))
  return new PersonsDto(person)
}

export async function get(query) {
  const persons = await repository.get(query)
  return persons.map(person => new PersonsDto(person))
}

export async function getById(id) {
  const person = await repository.getById(id)
  return new PersonsDto(person)
}

export async function updateById(id, data) {
  const dataClean = pick(data, ['firstname','lastname','dni'])
  const person = await repository.updateById(id, new Person(dataClean))
  return new PersonsDto(person)
}

export async function deleteById(id) {
  const person = await repository.deleteById(id)
  return new PersonsDto(person)
}

export default {
  create,
  get,
  getById,
  updateById,
  deleteById,
}