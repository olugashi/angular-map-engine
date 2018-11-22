var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist/my-app')));
app.use('/posts',posts);

app.get('/',(req,res)=>{

    res.sendfile(path.join(__dirname,'dist/my-app/index.html'));
});

var port = process.env.port || 4600;

app.listen(port,(req,res)=>{

    console.log('Server is Running Port-'+ port);
});

io.on('connection', function(socket) {
  socket.emit('announcements', { message: 'A new user has joined!' });
});

io.on('connection', function(socket) {
  socket.on('event', function(data) {
      console.log('A client sent us this dumb message:', data.message);
  });
});
