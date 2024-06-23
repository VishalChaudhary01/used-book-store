import express from 'express'
import { getUserProfile, signin, signup, updateUserProfile } from '../controllers/userControllers.js'
import isAuth from '../middlewares/auth.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/profile', isAuth, getUserProfile)
router.put('/profile', isAuth, updateUserProfile)

export default router;