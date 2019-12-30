const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => res.render('app'));
router.get('/home', (req, res) => res.render('app'));
router.get('/editor', (req, res) => res.render('app'));
