import express from 'express'
import { appendFile } from 'fs'
const router = express.Router()

import auth from './auth.js'

router.use('/auth', auth)

export default router