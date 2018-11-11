'use strict';

var Queue = require('bull'),
    express = require('express'),
    PORT = 3000,
    HOST = '0.0.0.0',
    app = express(),
    workQueue;

workQueue = new Queue('jobs', {
   redis: {
      port: 6379,
      host: 'redis',
   },
});

app.use(express.static('src/public'))
app.use(express.json());
app.post('/', function(req, res) {
   console.log(req.body);
   workQueue.add(req.body)
      .then(function() {
         res.send('{}');
      })
      .done();
});

app.listen(PORT, HOST);
console.log('Running on http://%s:%s', HOST, PORT);
