const {User } = require('../db');
const bcrypt = require('bcryptjs');

const postUser = async (req,res)=>{
    const {name, lastname, email, password} = req.body;
    if(!name || !lastname || !email || !password){
        return res.status(400).send({ error: "Fields are needed"})
    }
    const userCheck = await User.findOne({
        where : {
            email
        }
    });
    if(userCheck){
        return res.status(400).send({ error: error.message });
    }
    try {
        const user = await User.create({name, lastname, email, password: bcrypt.hashSync(password, 10)});
        res.send(user);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
};

module.exports = {
    postUser,
    getAllUsers
}