const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist/my-app')));
app.use('/posts',posts);

app.get('/',(req,res)=>{

    res.sendfile(path.join(__dirname,'dist/my-app/index.html'));
});

const port = process.env.port || 4600;

app.listen(port,(req,res)=>{

    console.log('Server is Running Port-'+ port);
});
