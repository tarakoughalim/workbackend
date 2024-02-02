const express = require('express');
const mongoose = require('mongoose');
const Route   = require('../backend/routes/route');
const router = require('./routes/route');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://tarakoughalim0:12331233@cluster0.ti6lbqt.mongodb.net/'
mongoose.connect(dbURI)
.then(() =>{
    app.listen(4000)
    console.log('connected to db');
})
.catch((err) => console.log(err));


app.use('/app/',router)


