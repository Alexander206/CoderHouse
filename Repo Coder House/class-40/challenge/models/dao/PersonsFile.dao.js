import { v4 as uuid4 } from 'uuid'
import fs from 'fs'
import config from '../../config.js'
import { NotFoundError } from '../../utils/errors.js'
import Persons from './Persons.dao.js'
import PersonDto from '../dto/Persons.dto.js'
import { translate } from '../../utils/commons.js'

let personsInstance = null

class PersonsFile extends Persons {
  constructor() {
    super()
    this.pathFile = config.dao.file
    if (!fs.existsSync(this.pathFile)) {
      write(this.pathFile, [])
    }
  }
  
  async create(personDto) {
    const { firstname : name, ...rest } = personDto
    const newPerson = {
      name,
      ...rest,
      id: uuid4(),
    }
    const personsDao = await read(this.pathFile)
    personsDao.push(newPerson)
    await write(this.pathFile, personsDao)
    return new PersonDto(translate(newPerson))
  }

  async get(query) {
    const personsDao = await read(this.pathFile)
    return personsDao.map(personDao => new PersonDto(translate(personDao)))
  }

  async getById(id) {
    const personsDao = await read(this.pathFile)
    const personDao = personsDao.find(p => p.id == id)
    if (!personDao) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    return new PersonDto(translate(personDao))
  }

  async updateById(id, personDto) {
    const personsDao = await read(this.pathFile)
    const index = personsDao.findIndex(p => p.id == id)
    if (index == -1) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    if (personDto.firstname) {
      personsDao[index].name = personDto.firstname
    }
    if (personDto.lastname) {
      personsDao[index].lastname = personDto.lastname
    }
    if (personDto.dni) {
      personsDao[index].dni = personDto.dni
    }
    await write(this.pathFile, personsDao)
    return new PersonDto(translate(personsDao[index]))
  }
  
  async deleteById(id) {
    const personsDao = await read(this.pathFile)
    const index = personsDao.findIndex(p => p.id == id)
    if (index == -1) {
      throw new NotFoundError(`Person with id ${id} not found`)
    }
    const personDeleted = personsDao.splice(index, 1)[0]
    console.log('personDeleted', personDeleted);
    await write(this.pathFile, personsDao)
    return new PersonDto(translate(personDeleted))
  }

  static getInstance() {
    if (!personsInstance) {
      personsInstance = new PersonsFile()
    }
    return personsInstance
  }
}

function write(pathFile, data) {
  return fs.promises.writeFile(pathFile, JSON.stringify(data, null, 2))
}

async function read(pathFile) {
  const data = await fs.promises.readFile(pathFile, 'utf-8')
  return JSON.parse(data)
}

export default PersonsFile