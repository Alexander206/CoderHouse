import { Router } from 'express'
import words from './words.routers.js'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.use('/words', words)

export default router