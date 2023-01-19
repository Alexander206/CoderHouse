export default class Person {
  #id
  #firstname
  #lastname
  #dni
  constructor(personDto) {
    this.id = personDto.id
    this.firstname = personDto.firstname
    this.lastname = personDto.lastname
    this.dni = personDto.dni
  }
  set id(value) {
    this.#id = value
  }
  get id() {
    return this.#id
  }
  set firstname(value) {
    this.#firstname = value
  }
  get firstname() {
    return this.#firstname
  }
  set lastname(value) {
    this.#lastname = value
  }
  get lastname() {
    return this.#lastname
  }
  set fullname(value) {
    if (!value) {
      throw new Error('The field fullname cannot be empty!')
    }
    const fn = value.split(' ')
    if (fn.length < 2) {
      throw new Error('The field fullname must be two word o more!')
    }
    this.#firstname = fn[0]
    this.#lastname = fn[1]
  }
  get fullname() {
    return `${this.#firstname} ${this.#lastname}`
  }
  set dni(value) {
    this.#dni = value
  }
  get dni() {
    return this.#dni
  }
}