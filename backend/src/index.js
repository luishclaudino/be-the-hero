const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Usar cors({ origin: 'http://meuapp.com'}) se for usar em uma aplicação real
app.use(express.json());
app.use(routes);

  /**
   * Driver: SELECT * FROM users
   * Query builder: table('users').select('*').where()
   */

app.listen(3333);

