var cool = require('cool-ascii-faces');
var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var request = require('request');
var jsonUrl = "http://api.openweathermap.org/data/2.5/weather?q=Brea&appid=3411e21b6e00192d6705faf2bb0b65d1";

request({
    url: jsonUrl,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

const path = require('path');
const PORT = process.env.PORT || 5000;
const url = require('url');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/weather', (req, res) => {
    res.render("weather")
    
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
