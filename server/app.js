const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/live-code1');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const index = require('./routes/index.js');
app.use('/', index);

app.listen(3000)