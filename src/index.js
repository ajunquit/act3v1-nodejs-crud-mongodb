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

// mongoose.connect(process.env.MONGODB_URI)
// 'mongodb://root:example@172.31.92.136:27017/test'
// const DB_URI = 'mongodb://172.31.92.136:27017/test';


// const DB_URI = 'mongodb://root:example@54.166.241.34:27017/admin';
const DB_URI = 'mongodb://root:example@172.31.92.136:27017/admin';
mongoose.connect(DB_URI)
    .then(() => console.log("connected to mongodb atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));