const winston = require('winston');

// setup are logger so we can see whats happening
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-task-service' },
  transports: [
    new winston.transports.File({ filename: 'task-logs.log' }),
    new winston.transports.Console(),
  ],
});

module.exports = logger;