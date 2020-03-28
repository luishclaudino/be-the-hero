const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors()); //Usar cors({ origin: 'http://meuapp.com'}) se for usar em uma aplicação real
app.use(express.json());
app.use(routes);
app.use(errors());

  /**
   * Driver: SELECT * FROM users
   * Query builder: table('users').select('*').where()
   */

module.exports = app;

