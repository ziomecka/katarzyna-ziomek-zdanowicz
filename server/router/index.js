require('dotenv').config();

const express = require('express');
const path = require('path');
const router = express.Router();
const contact = require('./contact');
const cacheTime = 86400000 * 30;

const isProduction = process.env.NODE_ENV === 'production';

const STATIC_PATH = isProduction
  ? path.resolve(__dirname, '../../bundleServerProd')
  : path.resolve(__dirname, '../../bundleServerDev');

const HTML_PATH = path.resolve(STATIC_PATH, './index.html');

router.get('/', (req, res) => {
  res.sendFile(HTML_PATH);
});

router.get('*.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');

  let fileName;

  if (isProduction) {
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Vary', 'Accept-Encoding');

    fileName = `${ req.url }.gz`;
  }

  res.sendFile(path.join(STATIC_PATH, fileName || req.url));
});

router.get('favicon/*', (req, res) => {
  res.sendFile(path.join(STATIC_PATH, req.url));
});

router.get('/contact*', contact);

router.use(express.static(STATIC_PATH, { maxAge: cacheTime }));

module.exports = router;

