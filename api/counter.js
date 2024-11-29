// api/counter.js
let count = 0;

module.exports = (req, res) => {
  if (req.method === 'GET') {
    // Get the current counter value
    return res.status(200).json({ counter: count });
  } else if (req.method === 'POST') {
    // Increase the counter when POST request is made
    count++;
    return res.status(200).json({ counter: count });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};
