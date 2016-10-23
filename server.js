var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var path = require('path');

var todos = [{title: 'Hello', done: false}];

app.use(express.static(__dirname + '/dist'));

var config = require('./webpack.config.js');

var compiler = webpack(config);
var middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);

app.get('/', function response(req, res) {
	res.sendFile(path.join(__dirname, 'src/index.html'));
 });

app.get('/todos', function (req, res) {
	// fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	// 	console.log( data );
	// 	res.end( data );
	// });
	res.end( 'Hello' );
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});