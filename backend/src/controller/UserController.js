const Router = require("express");
const {postUser, getAllUsers} = require('../service/UserService')
const router = Router();

router.post('/', postUser);
router.get('/', getAllUsers);

module.exports = router;