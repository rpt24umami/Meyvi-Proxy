const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname,'../dist')));

// app.get('/products/:id', (req, res) => {
//   res.sendFile('/Users/Meyvi/Documents/Hack_Reactor/FEC/Meyvi-Proxy/public/index.html');
// });

app.get('/products/:id', (req, res) => {
  if (req.params.id === 'bundle.js') {
    res.sendFile(path.resolve(__dirname, 'public/bundle.js'));
  } else if (req.params.id === 'style.css') {
    res.sendFile(path.resolve(__dirname, 'public/style.css'));
  } else {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
  }
});

app.get('/Reviews.jpg', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/Reviews.jpg'));
});

app.get('/Cart.jpg', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/Cart.jpg'));
})

app.listen(3000, () => {
  console.log('server listening at 3000');
});