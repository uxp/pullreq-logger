
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
        console.log('REQUEST: ', JSON.stringify(req.body), "\n");
        res.json({});
    });

    app.listen(app.get('port'), function() {
        console.log("listening on " + app.get('port'));
    });

}).call(this);
