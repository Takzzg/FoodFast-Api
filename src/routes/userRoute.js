import express from 'express';
import  {registerUser, getUser} from '../controllers/userControllers.js'
import {registerValidation} from '../../middlewares/bodyValidator.js'

const router = express.Router()

//post  http://localhost:3001/api/v1/user
router.post('/logup',registerValidation, registerUser) //el middleware de registerValidation me tira error :c


//get  http://localhost:3001/api/v1/user
router.get('/', getUser)




export default router;