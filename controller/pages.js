const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/juypter/:asteroidNum', (req, res) => {
    res.render('juypter', {page: req.params.asteroidNum});
})

module.exports = router;