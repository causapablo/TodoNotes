const Router = require("express");
const { getCategories } = require('../service/CategoryService');

const router = Router();


router.get('/',getCategories);


module.exports = router;


