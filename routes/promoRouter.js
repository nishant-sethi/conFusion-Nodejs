const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send all the promotions to you!');
})
.post((req,res,next) => {
    res.end('will add the promo : ' + req.body.name +
        ' with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('PUT not supported ');
})
.delete((req,res,next) => {
    res.end('Deleting all the promotions to you!');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the promo: ' +
        req.params.promoId + ' to you!');
})
.post((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('POST not supported ');
})
.put((req,res,next) => {
    res.end('will Update details of the promo: ' +
        req.params.promoId + ' to you!');
})
.delete((req,res,next) => {
    res.end('will delete details of the promo: ' +
    req.params.promoId + ' to you!');
});

module.exports = promoRouter;