'use strict';

var _ = require('underscore'),
    Q = require('q'),
    Queue = require('bull'),
    workQueue;

workQueue = new Queue('jobs', {
   redis: {
      port: 6379,
      host: 'redis',
   },
});

workQueue.process(function(job) {
   var delay = _.random(1, 5) * 1000;

   console.log('Starting job %j', job);

   return Q.delay(delay)
      .then(function() {
         console.log('Completed job in %s ms %j', delay, job);
      });
});
