import express from 'express';
import  {login, prueba, } from '../controllers/authControllers.js'
        
import {loginValidation,passwordValidation} from '../../middlewares/bodyValidator.js'

import verifyToken  from '../../middlewares/validateToken.js'

const router = express.Router()

//http://localhost:3001/api/v1/auth/login
router.post('/login',loginValidation,login)

//ruta de prueba
router.get('/',verifyToken,prueba)


export default router;
