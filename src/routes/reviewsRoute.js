import express from "express"
import {
    createReview,
    deleteReview,
    getProductReviews,
    getReviewById,
    getUserReviews
} from "../controllers/reviewsController.js"

const router = express.Router()

// GET localhost:3001/api/v1/reviews
router.get("/", (req, res) => {
    res.send("GET / reviews")
})

// POST localhost:3001/api/v1/reviews
router.post("/", createReview)

// GET localhost:3001/api/v1/reviews/:id
router.get("/:id", getReviewById)

// GET localhost:3001/api/v1/reviews/user/:id
router.get("/user/:id", getUserReviews)

// GET localhost:3001/api/v1/reviews/product/:id
router.get("/product/:id", getProductReviews)

// DELETE localhost:3001/api/v1/reviews/:id
router.delete("/:id", deleteReview)

export default router
