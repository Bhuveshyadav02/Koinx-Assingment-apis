const express = require('express');
//const { storeCryptoData, getCryptoData, getStandardDeviation } = require('./controller/cryptoController');
const {storeCryptoData,getCryptoData, getStandardDeviation }=require('../controller/cryptoController')
const router = express.Router();

// Route to fetch and store data
router.post('/store', storeCryptoData);

// Route to retrieve data
router.get('/stats/:crypto', getCryptoData);

// Route to calculate standard deviation
router.get('/deviation/:crypto', getStandardDeviation);

module.exports = router;