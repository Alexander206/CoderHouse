import { v4 as uuid4 } from 'uuid'

const words = [{
  id: uuid4(),
  word: 'Hola',
  timestamp: Date.now(),
}]

export function create(data) {
  const newWord = { id: uuid4(), ...data, timestamp: Date.now() }
  words.push(newWord)
  return newWord
}

export function get() {
  return {
    words: words.map(({ word }) => word).join(' '),
  }
}

export default {
  get,
  create,
}