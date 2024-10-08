# My Cool Task Queueing API 🚀

Hey there! 👋 This is my awesome task queueing API I made for my Node.js assignment. It's pretty neat, if I do say so myself. 😎

## What's this all about?

This API lets you submit tasks for different users. But here's the catch—it makes sure users don't go crazy and submit too many tasks at once. Clever, right?

### The Cool Features:

- **Queues tasks for users** 📋
- **Limits task submission per user** ⏱️
  - 1 task per second
  - 20 tasks per minute
- **Uses clustering** 💪 to handle more tasks concurrently
- **Logs all tasks** 🕵️‍♂️ to keep track of what's happening

## How to Get This Running

1. **Install Node.js** if you haven't already. You can download it from [Node.js official website](https://nodejs.org/).
  
2. **Clone the repository** or download it:
   ```bash
   git clone https://github.com/nooralamf42/user-task-queue-assignment.git
   cd task-queueing-api
