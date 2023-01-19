import { faker } from '@faker-js/faker'

export function personGenerator() {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    dni: String(faker.random.numeric(10)),
  };
};