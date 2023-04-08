// for web server
const express = require('express')

// for database
const mongoose = require('mongoose')

// environment variables
require("dotenv").config();

// import route users
const userRoutes = require('./routes/user') 

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get('/', (req,res) => {
    res.send("welcome to my api");
});

// connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongodb atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));