import express from 'express'
import { userSignup ,userLogin } from '../controller/user-file.js';

const router = express.Router();


router.post('/signup' ,userSignup);
router.post('/login',userLogin)
export default router;