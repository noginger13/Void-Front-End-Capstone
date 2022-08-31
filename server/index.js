const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');

dotenv.config();

const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is running in PORT: ${PORT}`));
