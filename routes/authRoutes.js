const express = require('express');
const { register, getProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
// Adicione outras rotas, como login, aqui

router.get('/profile/:email', getProfile);

module.exports = router;
