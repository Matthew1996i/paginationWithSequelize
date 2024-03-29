const express = require('express');
const routes = require('./routes');
require('./database');
const PORT = 3000;


const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
}); 
