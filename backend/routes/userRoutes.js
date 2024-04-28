import express from 'express';
const router = express.Router();
import { authUser, registerUser, getUserProfile, updateUserProfile, logOutUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

router.post('/login', authUser);
router.post('/register', registerUser);
router.post('/logout', logOutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;