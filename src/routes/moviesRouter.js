var express = require('express');
var fs = require('fs');
var moviesRouter = express.Router();

moviesRouter.route('/')
    .get((req, res) =>{
        fs.readFile('db.json', 'utf-8', (err, data)=>{
            if(err) throw err;
            res.send(data);
        })
    })

moviesRouter.route('/details')
    .get((req, res) =>{
        res.send('This is Movies details page');
    });

    module.exports = moviesRouter;