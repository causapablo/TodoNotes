const Router = require("express");
const { postNote , getAllNotes, getNoteById, updateNote, deleteNote} = require('../service/NoteService');
const validateJWT = require('../middlewares/JWTValidator')
const {check} = require('express-validator');
const validateFields = require('../middlewares/FieldValidator');
const router = Router();


router.post('/',[
    check('title', "The title is required").not().isEmpty(),
    check('content', "The content is required").not().isEmpty(),
    validateFields
],postNote);
router.get('/allNotes/:id', getAllNotes)
router.get('/:id',getNoteById)
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);

module.exports = router;
