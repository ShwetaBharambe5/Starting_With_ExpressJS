const path = require('path');

const rootdir = require('../util/path');

exports.getContact = (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
};

exports.postContacts = (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
    // res.redirect('/');
};

exports.getHome = (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'home.html'));
};

exports.getSuccess = (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'status.html'));
};