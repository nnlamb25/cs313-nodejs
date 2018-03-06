var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

express()
    .set('port', (process.env.PORT || 5000))
    .use(express.static(__dirname + '/public'))
    .set('views', __dirname + '/views')
    .set('view engine', 'ejs')
    .get('/', (request, response) => {
        response.render('pages/index')
        })
    .listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
        });