var cool = require('cool-ascii-faces');
var express = require('express');
var ejs = require('ejs');
var fs = require('fs');

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
  
  /*.get('/math', (req, res) => {
  	var q = url.parse(req.url, true);
  	var qdata = q.query;
  	var op = qdata.operation;
  	var left = Number(qdata.leftOp);
  	var right = Number(qdata.rightOp);
  	var result;

  	if (op == "add")
  	{
  		result = left + right;
  	}
  	else if (op == "sub")
  	{
  		result = left - right;
  	}
  	else if (op == "mult")
  	{
  		result = left * right;
  	}
  	else if (op == "div")
  	{
  		result = left / right;
  	}

  	res.render("result", { result : result });
    })
  .get('/postagePrice', (req, res) => {
    var q = url.parse(req.url, true);
  	var qdata = q.query;
  	var type = qdata.type;
  	var weight = Number(qdata.weight);
  	var price;
    if (type == "stamped")
    {
        if (weight < 1)
        {
            price = "$0.50";
        }
        else if (weight < 2)
        {
            price = "$0.71";
        }
        else if (weight < 3)
        {
            price = "$0.92";
        }
        else if (weight < 3.5)
        {
            price = "$1.13";
        }
        else
        {
            price = "A lot";
        }
    }
    else if (type == "metered")
    {
        if (weight < 1)
        {
            price = "$0.47";
        }
        else if (weight < 2)
        {
            price = "$0.68";
        }
        else if (weight < 3)
        {
            price = "$0.89";
        }
        else if (weight < 3.5)
        {
            price = "$1.10";
        }
        else
        {
            price = "A lot";
        }
    }
    else if (type == "flats")
    {
        if (weight < 1)
        {
            price = "$1.00";
        }
        else if (weight < 2)
        {
            price = "$1.21";
        }
        else if (weight < 3)
        {
            price = "$1.42";
        }
        else if (weight < 4)
        {
            price = "$1.63";
        }
        else if (weight < 5)
        {
            price = "$1.84";
        }
        else if (weight < 6)
        {
            price = "$2.05";
        }
        else if (weight < 7)
        {
            price = "$2.26";
        }
        else if (weight < 8)
        {
            price = "$2.47";
        }
        else if (weight < 9)
        {
            price = "$2.68";
        }
        else if (weight < 10)
        {
            price = "$2.89";
        }
        else if (weight < 11)
        {
            price = "$3.10";
        }
        else if (weight < 12)
        {
            price = "$3.31";
        }
        else if (weight < 13)
        {
            price = "$3.52";
        }
        else
        {
            price = "A lot";
        }
    }
    else if (type == "parcels")
    {
        if (weight < 4)
        {
            price = "$3.50";
        }
        else if (weight < 8)
        {
            price = "$3.75";
        }
        else if (weight < 9)
        {
            price = "$4.10";
        }
        else if (weight < 10)
        {
            price = "$4.45";
        }
        else if (weight < 11)
        {
            price = "$4.80";
        }
        else if (weight < 12)
        {
            price = "$5.15";
        }
        else if (weight < 13)
        {
            price = "$5.50";
        }
        else
        {
            price = "A lot";
        }
    }
    res.render("pPrice", { price: price, type : type, weight : weight });
    })*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
