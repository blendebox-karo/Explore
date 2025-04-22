import express from 'express'
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserByAdmin,
  updateUserById,
} from '../controllers/userControllers.js'
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers)
router.route('/auth').post(loginUser)
router.route('/logout').post(logoutCurrentUser)
router
  .route('/profile')
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile)

// Admin Routes 👇👇
router
  .route('/:id')
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserByAdmin)
  .put(authenticate, authorizeAdmin, updateUserById)

export default router
