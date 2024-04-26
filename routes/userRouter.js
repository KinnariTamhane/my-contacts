const express = require('express');

const {registerUser, loggedInUser, loginUser} = require('../controller/userController');

const router = express.Router();

const validateUser = require('../middleware/validateToken');


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateUser, loggedInUser);


module.exports = router