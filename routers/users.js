const express = require('express');

const router = express.Router();

const userController = require("../controllers/usersController")

router.get('/', userController.index)
router.get('/create', userController.create )
router.get('/register', userController.register)
router.get('/detail/:idUser?', userController.detail)
module.exports = router;