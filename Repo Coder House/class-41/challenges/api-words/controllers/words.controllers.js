import words from '../services/ words.service.js'

export function get(req, res) {
  res.json(words.get(req.query))
}

export function create(req, res) {
  const result = words.create(req.body)
  res.json(result)
}

export default {
  get,
  create,
}