const path = require('path');

const express =  require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const contactusRoutes = require('./routes/contactus');

const homeRoutes =  require('./routes/home');

const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('',contactusRoutes);

app.use(homeRoutes);

app.use(successRoutes);

app.use(errorController.get404);

app.listen(3000);
