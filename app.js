const express = require('express');
const mongoose = require('mongoose');
const Route   = require('../backend/routes/route');
const router = require('./routes/route');
const app = express();
const cors = require('cors');
const env = require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
const corsOption ={

    origin: process.env.FRONTEND_URL,
}
app.use(cors());
console.log(process.env.FRONTEND_URL);


const dbURI = process.env.DB_URL
console.log(dbURI)
mongoose.connect(dbURI)
.then(() =>{
    app.listen(process.env.PORT || 4800)
    console.log('connected to db');
})
.catch((err) => console.log(err));


app.use('/app/',router)


