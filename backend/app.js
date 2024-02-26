const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('express-async-errors');
require('dotenv').config();
require('./database/database');
require('./middlewares/error');
const reservationRouter = require("./routes/reservation");
const { errorHandler } = require('./middlewares/error');

const PORT = process.env.PORT || 8001;




app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//app.use(express.json());
// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


//const connection = mongoose.connection;


app.get("/about",(req,res) =>{
    res.send("<h1> Hello illllllllj</h1>");
});


app.use('/reservation', reservationRouter);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
  });