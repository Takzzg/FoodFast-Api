import express from "express"
import { registerUser, getUser } from "../controllers/userControllers.js"
import { registerValidation } from "../../middlewares/bodyValidator.js"

const router = express.Router()

//post  http://localhost:3001/api/v1/user
router.post("/", registerValidation, registerUser)

//GET  http://localhost:3001/api/v1/user
router.get("/", getAllUsers)

//POST  http://localhost:3001/api/v1/user/login
router.post("/login", logIn)

export default router
