const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname,'../dist')));

app.get('/products/:id', (req, res) => {
  res.sendFile('/Users/Meyvi/Documents/Hack_Reactor/FEC/Meyvi-Proxy/public/index.html');
});

app.listen(3000, () => {
  console.log('server listening at 3000');
});