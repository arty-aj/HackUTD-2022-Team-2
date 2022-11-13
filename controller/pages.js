const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/a', (req, res) => {
    res.render('asteroid12')
})

module.exports = router;