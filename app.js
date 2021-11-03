const express = require('express');
const app = express();
const logger = require('morgan');
const PORT = 5000;

//Config

//Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Router

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
