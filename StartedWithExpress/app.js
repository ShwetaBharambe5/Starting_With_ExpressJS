const express =  require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next)=>{
    res.send("<h1>Hello from Express</h1>");
    //res.send({ key1: 10 });
});

app.listen(5000);
