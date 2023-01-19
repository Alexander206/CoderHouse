import PersonsService from '../services/persons.service.js'

export async function create(req, res, next) {
  try {
    const person = await PersonsService.create(req.body)
    return res.status(201).json(person)
  } catch (error) {
    next(error)
  }
}

export async function get(req, res, next) {
  try {
    const person = await PersonsService.get(req.params.id)
    return res.status(200).json(person) 
  } catch (error) {
    next(error)
  }
}

export async function getById(req, res, next) {
  try {
    const person = await PersonsService.getById(req.params.id)
    return res.status(200).json(person) 
  } catch (error) {
    next(error)
  }
}

export async function updateById(req, res, next) {
  try {
    const person = await PersonsService.updateById(req.params.id, req.body)
    return res.status(200).json(person) 
  } catch (error) {
    next(error)
  }
}

export async function deleteById(req, res, next) {
  try {
    const person = await PersonsService.deleteById(req.params.id)
    return res.status(200).json(person) 
  } catch (error) {
    next(error)
  }
}

export default {
  create,
  get,
  getById,
  updateById,
  deleteById,
}