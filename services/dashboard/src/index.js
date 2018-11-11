'use strict'

var Arena = require('bull-arena');

Arena({
   queues: [
      {
         name: 'jobs',
         hostId: 'Job Queue',
         host: 'redis',
         port: 6379,
      },
   ]
});
