var express        = require('express'),
    app            = express(),
    lessMiddleware = require('less-middleware');

app.use(lessMiddleware(
    __dirname + '/public',
    // { debug: true },
    { force: true }
  )
);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

var server = app.listen(3000, function() {
  var host = server.address().address,
      port = server.address().port;

  console.log('App running at http://%s:%s', host, port);
});
