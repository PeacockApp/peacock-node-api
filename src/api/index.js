import express from 'express'
// Routes
import { project } from './project'

const api = express.Router()

api.use('/project', project)

export { api }
