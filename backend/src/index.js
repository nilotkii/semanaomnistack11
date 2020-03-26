//importando routes.js
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

//instanciando express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//App escutando rotas
app.listen(3333);