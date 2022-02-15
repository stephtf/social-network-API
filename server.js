const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require('./controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}!`);
    });
  });

