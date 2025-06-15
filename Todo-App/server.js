const http = require('http');
const fs = require('fs');
const path = require('path');

const tasksFile = './tasks.json';

if (!fs.existsSync(tasksFile)) fs.writeFileSync(tasksFile, '[]');
function getTasks() {
  return JSON.parse(fs.readFileSync(tasksFile));
}
function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync('./index.html'));
    } else if (req.url === '/style.css') {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(fs.readFileSync('./style.css'));
    } else if (req.url === '/todo.js') {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(fs.readFileSync('./todo.js'));
    } else if (req.url === '/tasks') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(getTasks()));
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  }

  if (req.method === 'POST') {
    if (req.url === '/add') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const { text } = JSON.parse(body);
        const tasks = getTasks();
        tasks.push({ text, done: false });
        saveTasks(tasks);
        res.writeHead(200);
        res.end('Task added');
      });
    } else if (req.url.startsWith('/done/')) {
      const index = parseInt(req.url.split('/').pop());
      const tasks = getTasks();
      if (tasks[index]) tasks[index].done = true;
      saveTasks(tasks);
      res.writeHead(200);
      res.end('Marked done');
    } else if (req.url.startsWith('/delete/')) {
      const index = parseInt(req.url.split('/').pop());
      const tasks = getTasks();
      tasks.splice(index, 1);
      saveTasks(tasks);
      res.writeHead(200);
      res.end('Deleted');
    }
  }
});

server.listen(3000, () => {
  console.log('📡 Server running at http://localhost:3000');
});
