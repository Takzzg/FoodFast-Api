import bcryptjs from "bcryptjs"
import User from "../models/user.js"

export const postUser = async (req, res) => {
    try {
        const { name, email, password, rol } = req.body

        const users = new User({ name, email, password, rol })

        //Encriptar password
        const salt = bcryptjs.genSaltSync() //hacer más complicado el método de encriptación
        users.password = bcryptjs.hashSync(password, salt)
        await users.save()

        res.json({ users })
    } catch (e) {
        console.log(e)
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
