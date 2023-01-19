import words from '../models/words.model.js'

export function get(query) {
  return words.get(query)
}

export function create(data) {
  return words.create(data)
}

export default {
  get,
  create,
}