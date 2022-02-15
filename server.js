const express = require('express');
const db = require('./config/connection');
const routes = require('./controllers/api-routes');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Relax! Everything is fine over on port ${PORT}!`);
    });
  });

