import express from 'express'
import { api } from './api'

const app = express()

app.use('/api', api)

app.listen(8080, () => {
    console.log('Listening on port 80');
})