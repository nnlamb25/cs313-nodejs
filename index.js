var cool = require('cool-ascii-faces');
var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var request = require('request');
var jsonQuery = require('json-query');

var appid = "3411e21b6e00192d6705faf2bb0b65d1";

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
        console.log("\nReceived page request from client " +
                    req.connection.remoteAddress);
        res.render("weather");
    }
    else if (typeof city == 'undefined' &&
             typeof lon != 'undefined' &&
             typeof lat != 'undefined')
    {
        console.log("\nLooking up weather at " + lon + " : " + lat +
                    "\nfor client " + req.connection.remoteAddress);
        var jsonUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" +
            lat + "&lon=" + lon + "&appid=" + appid;

        jsonLookup(jsonUrl, res);
    }
    else if (typeof city != 'undefined' &&
             typeof long == 'undefined' &&
             typeof lat == 'undefined')
    {
        console.log("\nLooking up weather at " + city +
                    "\nfor client " + req.connection.remoteAddress);
        var jsonUrl = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&appid=" + appid;

        jsonLookup(jsonUrl, res);
    }
    else
    {
        res.render("weather");
    }

})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function jsonLookup(jsonUrl, res)
{
    request({
            url: jsonUrl,
            json: true
            }, function (error, response, body) {
                if (!error && response.statusCode === 200)
                {
                    var cityName = body.name;
                    var temp = String(Math.round(Number(body.main.temp) * (9/5) - 459.67)) + " ℉";
                    var description = body.weather[0].description;
                    var main = body.weather[0].main;
                    var lon = body.coord.lon;
                    var lat = body.coord.lat;
                    console.log("Received JSON for " + cityName + "\n" + lon + " : " + lat);
                    res.render("weather", {city : cityName, temp : temp, main : main,
                                            description : description, lon : lon, lat : lat});
                }
                else
                {
                    console.log("ERROR: " + response.statusCode);
                    res.render("weather", {error : response.statusCode});
                }
            });
}
