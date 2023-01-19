import { v4 as uuid4 } from 'uuid'
import { NotFoundError } from '../../utils/errors.js'
import Persons from './Persons.dao.js'
import PersonDto from '../dto/Persons.dto.js'
import { translate } from '../../utils/commons.js'

let personsInstance = null

class PersonsMem extends Persons {
  constructor() {
    super()
    this.persons = []
  }
  async create(personDto) {
    const { firstname : name, ...rest } = personDto
    const newPerson = {
      name,
      ...rest,
      id: uuid4(),
    }
    this.persons.push(newPerson)
    const personDao = await this.getById(newPerson.id)
    return new PersonDto(translate(personDao))
  }
  async get(query) {
    return this.persons.map(personDao => new PersonDto(translate(personDao)))
  }
  async getById(id) {
    const personDao = this.persons.find(p => p.id == id)
    if (!personDao) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    return new PersonDto(translate(personDao))
  }

  async updateById(id, personDto) {
    const index = this.persons.findIndex(p => p.id == id)
    if (index == -1) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    if (personDto.firstname) {
      this.persons[index].name = personDto.firstname
    }
    if (personDto.lastname) {
      this.persons[index].lastname = personDto.lastname
    }
    if (personDto.dni) {
      this.persons[index].dni = personDto.dni
    }
    return new PersonDto(translate(this.persons[index]))
  }

  async deleteById(id) {
    const index = this.persons.findIndex(p => p.id == id)
    if (index == -1) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    return new PersonDto(translate(this.persons.splice(index, 1)[0]))
  }

  static getInstance() {
    if (!personsInstance) {
      personsInstance = new PersonsMem()
    }
    return personsInstance
  }
}

export default PersonsMem