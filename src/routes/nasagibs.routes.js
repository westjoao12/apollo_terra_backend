const express = require('express');
const router = express.Router();
const consumirNasaGibs = require('../controllers/nasagibsController');

/**
 * @route   GET /api/gibs-layer-url
 * @desc    Retorna a URL formatada para a camada do NASA GIBS para uma data específica.
 * @access  Public
 */

router.get('/api/gibs-layer-url', consumirNasaGibs);


module.exports = router;