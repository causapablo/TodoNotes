const Router = require('express');
const {check} = require('express-validator');
const validateFields = require('../middlewares/FieldValidator');
const {login} = require('../service/AuthService')

const router = Router();
//Email: asdasdasdasd@gmail.com y el Password.
router.post('/login',[
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields
], login);

module.exports = router;