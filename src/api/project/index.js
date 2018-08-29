import express from 'express'
const project = express.Router()

project.get('/', (_, res) => {
    res.send('Hello, project!')
})

export { project }