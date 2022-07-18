const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CategoryController = require('../controller/CategoryController');
const NoteController = require('../controller/NoteController');
const AuthController = require('../controller/AuthController');
const UserController = require('../controller/UserController');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/auth', AuthController);
router.use('/category', CategoryController);
router.use('/note', NoteController);
router.use('/user', UserController)
module.exports = router;
