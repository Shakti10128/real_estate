import express from 'express'
import { googleAuth, signIn, signUp } from '../controller/userController.js';

const router = express.Router();

router.post('/sign-up',signUp);
router.post('/sign-in',signIn);
router.post('/google',googleAuth);


export default router;