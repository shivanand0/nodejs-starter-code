import express from 'express'
import UserAuthRoutes from './user/index.js'

const app = express()
const router = express.Router()
router.use('/user', UserAuthRoutes)
    // const router = express.Router()

// router.get('/', (req, res) => {
//     res.send("Root Route")
// });

export default router