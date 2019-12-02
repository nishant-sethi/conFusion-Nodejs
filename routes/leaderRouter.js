const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send all the Leaders to you!');
})
.post((req,res,next) => {
    res.end('will add the leader : ' + req.body.name +
        ' with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('PUT not supported ');
})
.delete((req,res,next) => {
    res.end('Deleting all the Leaders to you!');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the leader: ' +
        req.params.leaderId + ' to you!');
})
.post((req,res,next) => {
    res.statusCode = 403; // operation not supported
    res.end('POST not supported ');
})
.put((req,res,next) => {
    res.end('will Update details of the leader: ' +
        req.params.leaderId + ' to you!');
})
.delete((req,res,next) => {
    res.end('will delete details of the leader: ' +
    req.params.leaderId + ' to you!');
});

module.exports = leaderRouter;