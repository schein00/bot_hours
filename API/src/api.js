var express = require('express');
var app = express();

var port = 30300;

const fs = require('fs');
const file = './data/dados.json';

var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grid/:grid', (req, res) => {
  let grids = JSON.parse(fs.readFileSync(file, 'utf8'));
  let grid = parseInt(req.params.grid);

  let fields = grids.forms.find((element) => element.id == grid);

  // console.log(grids.forms);
  // console.log(f);

  res.status(200).send(fields.formulario);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
