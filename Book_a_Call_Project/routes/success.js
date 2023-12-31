const express = require('express');

const successController = require('../controllers/contact');

const router = express.Router();

router.get('/status', successController.getSuccess);

module.exports = router;