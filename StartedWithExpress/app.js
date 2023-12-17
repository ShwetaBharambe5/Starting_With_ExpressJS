const express =  require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("Inside the Middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("Inside another middleware");

    res.send("<h1>Hello from Express</h1>");
    //res.send({ key1: 10 });
});

app.listen(5000);
