var cool = require('cool-ascii-faces');
var express = require('express');

const path = require('path')
const PORT = process.env.PORT || 5000
const url = require('url')


express()
.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) => {
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
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
