import { Router } from 'express'
import {
  create,
  get,
  getById,
  updateById,
  deleteById,
} from '../controllers/persons.controller.js'

const router = Router()

router.post('/', create)

router.get('/', get)

router.get('/:id', getById)

router.put('/:id', updateById)

router.delete('/:id', deleteById)

export default router
