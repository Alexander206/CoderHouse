import express from 'express'
import http from 'http'
import cors from 'cors'

import routers from './routers/index.js'

const app = express()

const PORT = process.env.NODE_PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.use('/', routers)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`)
})