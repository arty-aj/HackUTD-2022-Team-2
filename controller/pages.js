const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/jupyter/:asteroidNum', (req, res) => {
    res.render('jupyter', {page: req.params.asteroidNum});
})

router.get('/sum', (req, res) => {
    res.render('sum');
})

module.exports = router;