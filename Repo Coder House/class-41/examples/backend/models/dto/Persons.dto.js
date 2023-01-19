export default class PersonDto {
  constructor(person) {
    this.id = person.id
    this.firstname = person.firstname
    this.lastname = person.lastname
    this.dni = person.dni
  }
}