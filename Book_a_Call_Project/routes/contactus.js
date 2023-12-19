const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
});

// /admin/add-product => POST
router.post('/success', (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
    // res.redirect('/');
});

// app.post('/success',(req, res, next)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

module.exports = router;