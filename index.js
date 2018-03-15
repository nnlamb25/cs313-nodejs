var cool = require('cool-ascii-faces');
var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var request = require('request');

var appid = "3411e21b6e00192d6705faf2bb0b65d1";
var jsonUrl = '';
//var jsonUrl = "http://api.openweathermap.org/data/2.5/weather?q=Brea&appid=3411e21b6e00192d6705faf2bb0b65d1";

/*
var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
               position.coords.latitude + "&lon=" + position.coords.longitude + 
               "&appid=3411e21b6e00192d6705faf2bb0b65d1";

var url = "http://api.openweathermap.org/data/2.5/weather?lu=yes&q=" + 
                city + "&appid=3411e21b6e00192d6705faf2bb0b65d1";
*/

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
    var city = req.query.city;
    var lon = req.query.lon;
    var lat = req.query.lat;
    
    if (typeof city == 'undefined' && 
        typeof lon == 'undefined' && 
        typeof lat == 'undefined')
    {
        res.render("weather");
    }
    else if (typeof city == 'undefined' && 
             typeof lon != 'undefined' && 
             typeof lat != 'undefined')
    {
        console.log("Looking up weather for:\nLongitude: " + lon + "\nLatitude: " + lat);
        var lookupUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
            lat + "&lon=" + lon + "&appid=" + appid;
        
        lookupJson(lookupUrl);
        res.render("weather");
    }
    else if (typeof city != 'undefined' && 
             typeof long == 'undefined' && 
             typeof lat == 'undefined')
    {
        console.log("Looking up weather for:\nCity: " + city);
        var lookupUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + 
            city + "&appid=" + appid;
        
        lookupJson(lookupUrl);
        res.render("weather");
    }
    else
    {
        res.render("weather");
    }
    
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


function lookupJson(lookupUrl)
{
    jsonUrl = lookupUrl;
    request({
    url: jsonUrl,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200)
        {
            console.log(body) // Print the json response
        }
    });
}