import { Router } from 'express'

import words from '../controllers/words.controllers.js'

const router = Router()

router.get('/', words.get)

router.post('/', words.create)

export default router