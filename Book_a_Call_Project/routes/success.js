const path =  require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

router.get('/status', (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'status.html'));
});

module.exports = router;