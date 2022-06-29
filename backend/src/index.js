const { mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');

const DB_URL = "mongodb+srv://vladimir:R8QqnGKLQrEW1F8v@cluster0.8wijq.mongodb.net/portfolio?retryWrites=true&w=majority"

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', require('./Routes/routes'))
app.use('/messages', require('./Routes/routes'))

mongoose
  .connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => 
  {
  	throw new Error(error);
  });

app.listen(5000);
