require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path')
const cors=require("cors");
const mongoose = require('mongoose');
//const User = require('./models/User');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
});
app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'static')))
//ROUTES//
//register and login routes
const port = process.env.PORT;
//const workersRouter = require('./routes/workers');
const bookingsRouter = require('./routes/Bookings');
const ContactRouter = require('./routes/Contact');
const reportsRouter = require('./routes/Reports');

app.use("", require("./routes/start"));
app.use("",require("./routes/getProfile"));
app.use("",require("./routes/updateProfile"));
app.use("", require("./routes/updatePassword"));
app.use("", require("./routes/rates"))
//app.use('', workersRouter); 
app.use('', bookingsRouter); 
app.use('', ContactRouter); 
app.use('', reportsRouter); 

app.listen(port,() =>{
    console.log('server is working on port ',port);
}); 