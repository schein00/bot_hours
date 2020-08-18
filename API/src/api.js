var express = require('express');
var app = express();

var port = 30300;

const fs = require('fs');
const file = './data/dados.json';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grid/:form', (req, res) => {
  let grids = JSON.parse(fs.readFileSync(file, 'utf8'));
  let forms = parseInt(req.params.form);

  let f = grids.forms.find((element) => element.id == forms);

  console.log(grids.forms);
  console.log(f);

  res.status(200).send(f.formulario);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
