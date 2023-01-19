import mongoose from 'mongoose'
import config from '../../config.js'
import { NotFoundError } from '../../utils/errors.js'
import Persons from './Persons.dao.js'
import PersonDto from '../dto/Persons.dto.js'
import { translate } from '../../utils/commons.js'

let personsInstance = null

class PersonsMongo extends Persons {
  constructor() {
    super()
    mongoose
      .connect(config.dao.mongo)
      .then(() => {
        console.log('Database connected.')
      })
      .catch(error => {
        console.error('Error to connecto to database', error.message)
      })
    this.model = mongoose.model('Person', {
      name: String,
      lastname: String,
      dni: String,
    })
  }

  async create(personDto) {
    const { firstname : name, ...rest } = personDto
    const personDao = await this.model.create({ name, ...rest })
    return new PersonDto(translate(personDao))
  }

  async get(query) {
    const personsDao = await this.model.find({})
    return personsDao.map(personDao => new PersonDto(translate(personDao)))
  }

  async getById(id) {
    const personDao = await this.model.findOne({ _id: id })
    if (!personDao) {
      throw new NotFoundError(`Person with id ${id} not found`, { id })
    }
    return new PersonDto(translate(personDao))
  }

  async updateById(id, personDto) {
    const personDao = await this.model.findOne({ _id: id })
    if (!personDao) {
      throw new NotFoundError(`Person with id ${id} not found`, { id })
    }
    if (personDto.firstname) {
      personDao.name = personDto.firstname
    }
    if (personDto.lastname) {
      personDao.lastname = personDto.lastname
    }
    if (personDto.dni) {
      personDao.dni = personDto.dni
    }
    return new PersonDto(translate(await personDao.save()))
  }

  async deleteById(id) {
    const personDao = await this.model.findOne({ _id: id })
    if (!personDao) {
      throw new NotFoundError(`Person with id ${id} not found`, { id })
    }
    await this.model.deleteOne({ _id: id })
    return new PersonDto(translate(personDao))
  }

  static getInstance() {
    if (!personsInstance) {
      personsInstance = new PersonsMongo()
    }
    return personsInstance
  }
}

export default PersonsMongo