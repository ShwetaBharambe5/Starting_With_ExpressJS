const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', contactController.getContact);

// /admin/add-product => POST
router.post('/success', contactController.postContacts);

module.exports = router;