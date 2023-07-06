require('dotenv').config();
const path = require("path");

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

app.get('/*', (_req, res) => {
  res.sendFile(path.join(path.join(__dirname, 'public', 'index.html')));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to port
    if (process.env.PORT) {
      app.listen(process.env.PORT, () => {
        console.log(
          'connected to DB and listening for requests on port',
          process.env.PORT
        );
      });
    }
    module.exports = app;
  })
  .catch((err) => {
    console.log(err);
  });
