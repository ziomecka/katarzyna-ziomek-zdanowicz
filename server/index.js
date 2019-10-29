require('dotenv').config();
require('./ssr/');

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const csp = require('helmet-csp');
const http = require('http');
const router = require('./router/');
const getCspDirectives = require('./get-csp-directives');
const app = express();
const server = http.Server(app);

const port = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(cors({
  exposedHeaders: [ 'Content-Type', 'Content-Security-Policy' ],
  credentials: true,
  origin: true,
}));

app.use(helmet());
app.use(csp({ directives: getCspDirectives() }));
app.use(router);

server.listen(port, () => console.log(`Listening on port: ${ port }`)); // eslint-disable-line
