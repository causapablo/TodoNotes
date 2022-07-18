const { User } = require('../db');
const { generateJWT } = require("../helpers/JWTGenerator");
const bcrypt = require('bcryptjs');

const login = async (req, res ) => {
    const { email, password } = req.body;
    try {

        //Verificar si el email existe
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({ msg: "The email provided doesn't exist in our database" });
        }
        



        //Verificar la contraseña
        const validPassword = bcrypt.compareSync(password, user.password);

        

        if (!validPassword) {
            return res.status(400).json({ msg: "Password is not correct. Try again!" });
        }

        //Generar el JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Contact the admin"
        });
    }



};

module.exports = {
    login
}