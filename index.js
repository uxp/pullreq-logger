
module.exports = (function() {
    var express = require('express'),
        http = require('http'),
        path = require('path'),
        parser = require('body-parser'),
        app = express();

    app.set('port', (process.env.PORT || 3000));
    app.use(parser.json());
    app.use(parser.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/public'));

    app.post('/', function(req, res) {
        console.log(req.method, req.url, "\n");
        console.log('PARAMS: ', JSON.stringify(req.params), "\n");
        console.log('QUERY:  ', JSON.stringify(req.query), "\n");
        console.log('BODY:   ', JSON.stringify(req.body), "\n");
        res.send("");
    });
    app.get('/', function(req, res) {
        console.log(req.method, req.url, "\n");
        console.log('PARAMS: ', JSON.stringify(req.params), "\n");
        console.log('QUERY:  ', JSON.stringify(req.query), "\n");
        console.log('BODY:   ', JSON.stringify(req.body), "\n");
        res.send("");
    });

    app.listen(app.get('port'), function() {
        console.log("listening on " + app.get('port'));
    });

}).call(this);
