const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => res.render('app'));
router.get('/home', (req, res) => res.render('app'));
router.get('/login', (req, res) => res.render('app'));
router.get('/signup', (req, res) => res.render('app'));
router.get('/logout', (req, res) => res.render('app'));
router.get('/editor/:slug', (req, res) => res.render('app'));
