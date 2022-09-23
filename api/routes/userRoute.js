const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.post('/mail', userController.sendMail);


module.exports = router;