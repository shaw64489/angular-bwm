const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const config = require('./config/dev');

// Routes
const rentalRoutes = require("./routes/rentals");

//Models
const Rental = require('./models/rental');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('Connected to DB!');
});
 
//Middleware
app.use(bodyParser.json());

//API Routes
app.use('/api/v1/rentals', rentalRoutes);


app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
});
