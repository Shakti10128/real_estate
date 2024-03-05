import express from 'express'
import { signUp } from '../controller/userController.js';

const router = express.Router();

router.post('/sign-up',signUp);


export default router;