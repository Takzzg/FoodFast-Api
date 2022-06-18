import jwt from 'jsonwebtoken'

export const generateToken = (uid) => {
    console.log("Estoy generando un token :O");
    const expiresIn = "12h"
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
};