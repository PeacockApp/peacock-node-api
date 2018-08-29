import express from 'express'
import { api } from './api'
import { connection } from './connection'

const app = express()

connection().once('open', () => {
    console.log('connected =)')    
})

app.use('/api', api)

app.listen(8080, () => {
    console.log('Listening on port 80');
})