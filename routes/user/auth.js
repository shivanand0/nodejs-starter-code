import express from 'express'
const router = express.Router()

import AuthController from '../../controllers/user/index.js'

/* SignIn Users */
router.post('/signin', AuthController.signin)

/* SignUp Users */
router.post('/signup', AuthController.signup)

export default router