import Person from '../Person.model.js'
import PersonDto from '../dto/Persons.dto.js'
import PersonsDaoFactgory from '../dao/PersonsDaoFactory.js'

export default class PersonRepository {
  constructor() {
    this.dao = PersonsDaoFactgory.getPersonDao()
  }

  async create(person) {
    const personDto = await this.dao.create(new PersonDto(person))
    return new Person(personDto)
  }

  async get(query) {
    const personsDto = await this.dao.get(query)
    return personsDto.map(personDto => new Person(personDto))
  }

  async getById(id) {
    const personDto = await this.dao.getById(id)
    return new Person(personDto)
  }
  
  async updateById(id, person) {
    const personDto = await this.dao.updateById(id, new PersonDto(person))
    return new Person(personDto)
  }

  async deleteById(id) {
    const personDto = await this.dao.deleteById(id)
    return new Person(personDto)
  }
}