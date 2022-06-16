import Review from "../models/review.js"

export const getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)

        return review
            ? res.send(review)
            : res
                  .status(404)
                  .json({ error: `No category found with id: ${id}` })
    } catch (error) {
        console.log(error)
    }
}

export const createReview = async (req, res) => {
    try {
        const { userId, productId, ...data } = req.body

        if (!userId || !productId)
            return res.status(500).json({ error: `BAD REQUEST - missing id` })

        const newReview = new Review({ userId, productId, ...data })
        await newReview.save()

        res.status(201).json(newReview)
    } catch (error) {
        console.log(error)
    }
}

export const getUserReviews = async (req, res) => {
    try {
        const { id } = req.params
        const reviews = await Review.find({ userId: id })
        res.send(reviews)
    } catch (error) {
        console.log(error)
    }
}

export const getProductReviews = async (req, res) => {
    try {
        const { id } = req.params
        const reviews = await Review.find({ productId: id })
        res.send(reviews)
    } catch (error) {
        console.log(error)
    }
}

export const deleteReview = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findByIdAndRemove(id)
        res.send("Review Eliminada")
    } catch (error) {
        console.log(error)
    }
}
