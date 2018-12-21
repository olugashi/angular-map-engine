const server = require('http').createServer();
const io = require('socket.io')(server);

const port =  process.env.PORT || 3000;

io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on ${port}`);
  });