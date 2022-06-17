import User from "../models/user.js"

export const registerUser = async (req, res) => {
    const { name, email, password, rol } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) return res.json({ err: "existing user" })
        user = new User({ name, email, password, rol })
        //user.email_Welcome()
        await user.save()
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.json({ err: "Error server" })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        if (!user)
            return res.status(400).json({
                msg: "No hay usuarios para mostrar"
            })

        let basicInfo = user.map((u) => ({ name: u.name, email: u.email }))
        res.status(200).json(basicInfo)
    } catch (e) {
        console.log(e)
    }
}

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            console.log("missing credentials")
            return res.status(500).json({ error: "missing credentials" })
        }

        // FAKE LOGIN
        const user = await User.find({ email })
        // const match = user.password === password
        const match = true

        if (match) return res.json(user[0])
        return res.status(500).json({ error: "credentials mismatch" })
        // FAKE LOGIN
    } catch (error) {
        console.log(error)
    }
}
