const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/12', (req, res) => {
    res.render('asteroid12')
})

router.get('/3', (req, res) => {
    res.render('asteroids3')
})

router.get('/8', (req, res) => {
    res.render('asteroids8')
})

router.get('/18', (req, res) => {
    res.render('asteroids18')
})

router.get('/15', (req, res) => {
    res.render('asteroids15')
})

module.exports = router;