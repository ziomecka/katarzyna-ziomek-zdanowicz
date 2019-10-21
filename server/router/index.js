require('dotenv').config();

const express = require('express');
const path = require('path');
const router = express.Router();
// const contact = require('./contact');

const STATIC_PATH = process.env.NODE_ENV === 'production'
  ? path.resolve(__dirname, '../../bundleServerProd')
  : path.resolve(__dirname, '../../bundleServerDev');

const HTML_PATH = path.resolve(STATIC_PATH, './index.html');

router.use(express.static(STATIC_PATH));

router.get('*.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.setHeader('Content-Encoding', 'gzip');
  res.sendFile(path.join(STATIC_PATH, `${ req.url }.gz`));
});

router.get('/', (req, res) => {
  res.sendFile(HTML_PATH);
});

// router.get('/contact*', contact);

module.exports = router;

