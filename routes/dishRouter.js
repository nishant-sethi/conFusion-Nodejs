const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send all the dishes to you!');
})
.post((req,res,next) => {
    res.end('will add the dish : ' + req.body.name +
        ' with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('PUT not supported ');
})
.delete((req,res,next) => {
    res.end('Deleting all the dishes to you!');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the dish: ' +
        req.params.dishId + ' to you!');
})
.post((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('POST not supported ');
})
.put((req,res,next) => {
    res.end('will Update details of the dish: ' +
        req.params.dishId + ' to you!');
})
.delete((req,res,next) => {
    res.end('will delete details of the dish: ' +
    req.params.dishId + ' to you!');
});

module.exports = dishRouter;