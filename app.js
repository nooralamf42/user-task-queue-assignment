const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const { createRateLimiter } = require('./rateLimiter');
const { processTask } = require('./taskProcessor');
const logger = require('./logger');

const app = express();
app.use(express.json());

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const rateLimiter = createRateLimiter();

  // this is were we handle the task requests
  app.post('/task', async (req, res) => {
    const { user_id } = req.body;

    try {
      await rateLimiter.limit(user_id);
      await processTask(user_id);
      res.status(200).json({ message: 'Task queued successfully' });
    } catch (error) {
      if (error.message === 'Rate limit exceeded') {
        // oops, too many requests. but we'll queue it anyway
        res.status(429).json({ message: 'Rate limit exceeded, task queued' });
      } else {
        // something went wrong, lets log it
        logger.error(`Error processing task: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });

  // lets start the server!
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started on port ${PORT}`);
  });
}