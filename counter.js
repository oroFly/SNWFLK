const fs = require('fs');
const path = './counter.json';

// Read counter from file or initialize it
let counter = 0;
if (fs.existsSync(path)) {
  counter = JSON.parse(fs.readFileSync(path)).counter || 0;
}

// Route to get the current counter
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// Route to increment the counter
app.post('/counter', (req, res) => {
  counter++;
  fs.writeFileSync(path, JSON.stringify({ counter }));
  res.json({ counter });
});
