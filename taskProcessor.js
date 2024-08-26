const logger = require('./logger');

const taskQueues = new Map();

const processTask = async (userId) => {
  if (!taskQueues.has(userId)) {
    taskQueues.set(userId, []);
  }

  const queue = taskQueues.get(userId);
  queue.push(Date.now());

  // lets process all the tasks in the queue
  while (queue.length > 0) {
    const taskTime = queue[0];
    const now = Date.now();
    const delay = Math.max(0, taskTime - now + 1000);  // make sure we wait at least a second

    // wait a bit before doing the next task
    await new Promise(resolve => setTimeout(resolve, delay));
    
    queue.shift();
    await task(userId);
  }
};

// this is the actual task we're doing
const task = async (userId) => {
  const timestamp = Date.now();
  logger.info(`${userId}-task completed at-${timestamp}`);
};

module.exports = { processTask };