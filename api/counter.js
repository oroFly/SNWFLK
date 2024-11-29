const fs = require('fs');
const path = './counter.json';

let counter = 0;
if (fs.existsSync(path)) {
    counter = JSON.parse(fs.readFileSync(path)).counter || 0;
}

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json({ counter });
    } else if (req.method === 'POST') {
        counter++;
        fs.writeFileSync(path, JSON.stringify({ counter }));
        res.json({ counter });
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
