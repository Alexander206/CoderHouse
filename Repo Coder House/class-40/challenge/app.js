import express from 'express'
import http from 'http'
import persons from './routers/persons.router.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/persons', persons)

app.use((error, req, res, next) => {
  console.error(error)
  res.status(error.status || 500).json(error)
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`)
})
