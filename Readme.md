# My Cool Task Queueing API 🚀

Hey there! 👋 This is my awesome task queueing API I made for my Node.js assignment. It's pretty neat, if I do say so myself. 😎

## What's this all about?

So, this API lets you submit tasks for different users. But here's the catch - it makes sure users don't go crazy and submit too many tasks at once. Clever, right?

### The cool features:

- Queues tasks for users 📋
- Limits how many tasks a user can do (1 per second, 20 per minute) ⏱️
- Uses a cluster thingy to handle more stuff at once 💪
- Logs all the tasks so we know what's going on 🕵️‍♂️

## How to get this baby running

1. First, make sure you've got Node.js installed. If not, go get it!

2. Clone this repo (or download it, whatever floats your boat)

3. Open up your terminal, go to the project folder, and run:
This'll get all the stuff we need.

4. To start the server, just run:
If everything's cool, you'll see a message saying the server's up and running.

## Using the API

Wanna see how to use the API? Just go to `http://localhost:3000/api` in your browser after starting the server. It's got all the deets!

But here's the quick version:

- Send a POST request to `http://localhost:3000/task`
- Include a JSON body like this:
```json
{
 "user_id": "123"
}#   u s e r - t a s k - q u e u e - a s s i g n m e n t  
 