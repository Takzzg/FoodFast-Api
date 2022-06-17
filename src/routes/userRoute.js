import express from "express"
import { registerUser, getAllUsers } from "../controllers/userControllers.js"
import { registerValidation } from "../../middlewares/bodyValidator.js"
import { login } from "../controllers/authControllers.js"

const router = express.Router()

//post  http://localhost:3001/api/v1/user
router.post("/", registerValidation, registerUser)

//GET  http://localhost:3001/api/v1/user
router.get("/", getAllUsers)

//POST  http://localhost:3001/api/v1/user/login
// router.post("/login", login)

export default router
